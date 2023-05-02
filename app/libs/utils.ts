export const formatISODate = (date: any) => {
  if (!(date instanceof Date)) {
    throw new Error("Invalid date object");
  }
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getDate();
  const offsetMinutes = date.getTimezoneOffset();
  const offsetHours = Math.abs(Math.floor(offsetMinutes / 60));
  const offsetSign = offsetMinutes < 0 ? "+" : "-";
  const offsetFormatted = `${offsetSign}${padStart(
    offsetHours,
    2,
    "0"
  )}:${padStart(Math.abs(offsetMinutes) % 60, 2, "0")}`;
  const formattedDate = `${year}-${padStart(month, 2, "0")}-${padStart(
    day,
    2,
    "0"
  )}T00:00:00${offsetFormatted}`;

  return formattedDate;
};

function padStart(string: any, targetLength: any, padString: any) {
  string = String(string);
  targetLength = targetLength >> 0;
  padString = String(padString || " ");

  if (string.length > targetLength) {
    return String(string);
  } else {
    targetLength = targetLength - string.length;
    if (targetLength > padString.length) {
      padString += padString.repeat(targetLength / padString.length);
    }
    return padString.slice(0, targetLength) + String(string);
  }
}
