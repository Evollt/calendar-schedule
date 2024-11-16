# Calendar Schedule

## Описание

Создает файл isc для импорта в любой календарь расписание колледжа УНИКИТ.
Импорт происходит на день вперед текущей даты.

Также вы можете убрать фильтр здесь.
Тогда расписание будет импортироваться сразу на неделю.

```ts
const todaySchedule = response.data.data.rasp.filter((item) => {
  const scheduleDate = new Date(item.датаНачала);

  scheduleDate.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);

  return scheduleDate.toLocaleString() == currentDate.toLocaleString();
});
```

Строка 10 в файле `index.ts`

## Как запустить проект?

1. Установка [Node Js](https://nodejs.org/en)
2. Глобальная установка typescript - `npm install -g typescript`
3. Интерпретация кода с typescript на javascript - `tsc`
4. Запуск проекта - `node dist/index.js`

Далее вам нужно импортировать сгенерированный файл в календарь.
Если вы пользователь мак и пользуйтесь ICalendar, то просто дважды кликните по файлу.
