export const generateDaysAheadFromNow = (daysAhead: number) => {
  const now = new Date();
  const days = [];
  for (let i = 0; i < daysAhead; i++) {
    const dayDate = new Date(now);
    dayDate.setDate(dayDate.getDate() + i);

    const day = dayDate.getDate();
    const month = dayDate.getMonth() + 1;
    const year = dayDate.getFullYear();
    const date = day + "." + month + ".";
    const formattedDateWithYear = date + year;

    const dateWithYear = (function () {
      let formattedMonth = month;
      let formattedDay = day;
      if (month < 10) formattedMonth = "0" + month;
      if (day < 10) formattedDay = "0" + day;
      return year + "-" + formattedMonth + "-" + formattedDay;
    })();

    if (isToday(formattedDateWithYear)) {
      days.push({ date: dateWithYear, formattedDate: "Dnes " + date });
    } else if (isTomorrow(formattedDateWithYear)) {
      days.push({ date: dateWithYear, formattedDate: "Zítra " + date });
    } else {
      const dayShortName = getDayShortName(formattedDateWithYear);
      days.push({
        date: dateWithYear,
        formattedDate:
          dayShortName.charAt(0).toUpperCase() +
          dayShortName.slice(1) +
          " " +
          date,
      });
    }
  }
  return days;
};

export const isToday = (date: string) => {
  const newDate = stringToDate(date);
  const today = new Date();
  return (
    today.getDate() == newDate.getDate() &&
    today.getMonth() == newDate.getMonth() &&
    today.getFullYear() == newDate.getFullYear()
  );
};

export const stringToDate = (date: string) => {
  const day = date.split(".")[0];
  let month = date.split(".")[1];
  if (+month !== 0) {
    month -= 1;
  }
  const year = date.split(".")[2];
  return new Date(year, month, day);
};

export const isTomorrow = (date: string) => {
  const newDate = stringToDate(date);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return (
    newDate.getDate() == tomorrow.getDate() &&
    newDate.getMonth() == tomorrow.getMonth() &&
    newDate.getFullYear() == tomorrow.getFullYear()
  );
};

export const getDayShortName = (date: string) => {
  const newDate = stringToDate(date);
  return newDate.toLocaleDateString("cs", { weekday: "long" }).substring(0, 2);
};

export const getMinutes = (time: string) => {
  const values = time.split(":");
  let hours = values[0];
  let minutes = values[1];
  if (hours.split("")[0] === "0") {
    hours = hours.split("")[1];
  }
  if (minutes.split("")[0] === "0") {
    minutes = minutes.split("")[1];
  }
  return +hours * 60 + +minutes;
};
