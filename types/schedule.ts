export interface ISchedule {
  data: {
    isCyclicalSchedule: boolean;
    rasp: IScheduleRasp[];
    info: IScheduleInfo;
  };
  state: number;
  msg: string;
  time: number;
}

interface IScheduleInfo {
  group: {
    name: string;
    groupID: number;
  };
  prepod: {
    name: string;
    userID: number | null;
  };
  kafedra: {
    name: string;
  };
  aud: {
    name: string;
  };
  year: string;
  curWeekNumber: number;
  curNumNed: number;
  selectedNumNed: number;
  curSem: number;
  typesWeek: IScheduleWeekType[];
  fixedInCache: boolean;
  date: string;
  lastDate: string;
  dateUploadingRasp: string;
}

interface IScheduleWeekType {
  typeWeekID: number;
  name: string;
  shortName: string | null;
}

export interface IScheduleRasp {
  код: number;
  дата: string;
  датаНачала: string;
  датаОкончания: string;
  перерыв: number;
  начало: string;
  конец: string;
  деньНедели: number;
  день_недели: string;
  почта: string;
  день: string;
  код_Семестра: number;
  типНедели: number;
  номерПодгруппы: number;
  часов: number | null;
  дисциплина: string;
  преподаватель: string;
  должность: string;
  аудитория: string;
  учебныйГод: string;
  группа: string;
  custom1: string;
  часы: string;
  неделяНачала: number;
  неделяОкончания: number;
  замена: boolean;
  кодПреподавателя: number;
  кодГруппы: number;
  фиоПреподавателя: string;
  кодПользователя: number;
  элементЦиклРасписания: boolean;
  элементГрафика: boolean;
  тема: string;
  номерЗанятия: number;
  ссылка: string | null;
  созданиеВебинара: boolean;
  кодВебинара: string | null;
  вебинарЗапущен: boolean;
  показатьЖурнал: boolean;
  кодыСтрок: number[];
  цвет: string;
}
