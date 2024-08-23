export const generateDaysAheadFromNow = (daysAhead: number) => {
  const now = new Date();
  const days = [];
  for (let i = 0; i < daysAhead; i++) {
    const dayDate = new Date(now);
    dayDate.setDate(dayDate.getDate() + i);

    const day = dayDate.getDate();
    const month = dayDate.getMonth() + 1;
    const year = dayDate.getFullYear();

    const date = year + "-" + month + "-" + day + "-";
    const formattedDate = day + "." + month + ".";

    const dateWithYear = (function () {
      let formattedMonth = month.toString();
      let formattedDay = day.toString();
      if (month < 10) formattedMonth = "0" + month;
      if (day < 10) formattedDay = "0" + day;
      return year + "-" + formattedMonth + "-" + formattedDay;
    })();

    if (isToday(date)) {
      days.push({ date: dateWithYear, formattedDate: "Dnes " + formattedDate });
    } else if (isTomorrow(date)) {
      days.push({
        date: dateWithYear,
        formattedDate: "Zítra " + formattedDate,
      });
    } else {
      const dayShortName = getDayShortName(date);
      days.push({
        date: dateWithYear,
        formattedDate:
          dayShortName.charAt(0).toUpperCase() +
          dayShortName.slice(1) +
          " " +
          formattedDate,
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

export const isSameDay = (date1: string, date2: string) => {
  const newDate1 = stringToDate(date1);
  const newDate2 = stringToDate(date2);
  return (
    newDate1.getDate() == newDate2.getDate() &&
    newDate1.getMonth() == newDate2.getMonth() &&
    newDate1.getFullYear() == newDate2.getFullYear()
  );
};

export const stringToDate = (date: string) => {
  const year = parseInt(date.split("-")[0]);
  let month = parseInt(date.split("-")[1]);
  if (month !== 0) {
    month -= 1;
  }
  const day = parseInt(date.split("-")[2]);

  return new Date(year, month, day);
};

export const dateToString = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedMonth = month < 10 ? "0" + month : month;
  const formattedDay = day < 10 ? "0" + day : day;

  return `${year}-${formattedMonth}-${formattedDay}`;
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
