import axios, { AxiosResponse } from "axios";
import { ISchedule } from "../types/schedule";

export default class Schedule {
  constructor(private group_id: number) {}

  async getSchedule(date: Date): Promise<AxiosResponse<ISchedule>> {
    const localDate = date.toLocaleDateString("en-CA"); // Формат YYYY-MM-DD

    return await axios.get("https://dec.mgutm.ru/api/Rasp", {
      params: {
        idGroup: this.group_id,
        sdate: localDate,
      },
    });
  }
}
