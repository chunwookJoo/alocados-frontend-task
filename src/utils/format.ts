export const getFormatDigits = (
  value: number,
  maximumFractionDigits: number
) => {
  const localeString = value.toLocaleString("ko-KR");
  const dotIndex = localeString.indexOf(".");
  const returnStr =
    dotIndex > 0
      ? localeString.slice(0, dotIndex + maximumFractionDigits + 1)
      : localeString;
  return returnStr;
};

export const getFormatDate = (exchangedDate: Date) => {
  const year = exchangedDate.getFullYear();
  const month = exchangedDate.getMonth() + 1;
  const date = exchangedDate.getDate();
  const format =
    year +
    "-" +
    ("00" + month.toString()).slice(-2) +
    "-" +
    ("00" + date.toString()).slice(-2);
  return format;
};

export const getFormatTime = (exchangedDate: Date) => {
  let hours = exchangedDate.getHours();
  let minutes: number | string = exchangedDate.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours %= 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const strTime = ampm + " " + hours + ":" + minutes;
  return strTime;
};
