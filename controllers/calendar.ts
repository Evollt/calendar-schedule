import * as fs from "fs";
import { IScheduleRasp } from "../types/schedule";
import { toZonedTime, format } from "date-fns-tz";

export default class Calendar {
  constructor(
    private schedule: IScheduleRasp[],
    private timeZone: string = "Europe/Moscow",
  ) {}

  private createEvent(item: IScheduleRasp): string {
    const zonedStartDate = toZonedTime(
      new Date(item.датаНачала),
      this.timeZone,
    );
    const zonedEndDate = toZonedTime(
      new Date(item.датаОкончания),
      this.timeZone,
    );

    const startFormatted = format(zonedStartDate, "yyyyMMdd'T'HHmmss", {
      timeZone: this.timeZone,
    });
    const endFormatted = format(zonedEndDate, "yyyyMMdd'T'HHmmss", {
      timeZone: this.timeZone,
    });

    return `BEGIN:VEVENT
SUMMARY:${item.дисциплина}
DESCRIPTION:${item.преподаватель}
LOCATION:${item.аудитория}
DTSTART:${startFormatted}
DTEND:${endFormatted}
UID:${item.код}
SEQUENCE:0
STATUS:CONFIRMED
BEGIN:VALARM
TRIGGER:-PT3M
DESCRIPTION:Напоминание о событии
ACTION:DISPLAY
END:VALARM
END:VEVENT`;
  }

  createCalendarFile() {
    const events = this.schedule
      .map((item) => this.createEvent(item))
      .join("\n");

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
${events}
END:VCALENDAR`;

    fs.writeFileSync("schedule.ics", icsContent);
  }
}
