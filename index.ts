import Calendar from "./controllers/calendar";
import Schedule from "./controllers/schedule";

const schedule = new Schedule(30360);
const currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 1);

schedule.getSchedule(currentDate).then((response) => {
  const todaySchedule = response.data.data.rasp.filter((item) => {
    const scheduleDate = new Date(item.датаНачала);

    scheduleDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    return scheduleDate.toLocaleString() == currentDate.toLocaleString();
  });

  new Calendar(todaySchedule).createCalendarFile();
});
