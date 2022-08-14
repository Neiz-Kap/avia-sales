export const transformUnixToTime = (unix_timestamp) => {
  let date = new Date(unix_timestamp);
  return date.getHours() + ":" + ("0" + date.getMinutes()).substr(-2);
};

export const transformUnixToDuration = (unix_timestamp) => {
  let date = new Date(unix_timestamp);
  return date.getHours() + "ч " + ("0" + date.getMinutes()).substr(-2) + "м";
};

// не нужна
export const hoursToUnix = () => {
  let dateStartToday = new Date();
  let year = dateStartToday.getFullYear();
  let month = dateStartToday.getMonth();
  let day = dateStartToday.getDate();
  dateStartToday = `${day}/${month}/${year} 00:00:00`;

  const [dateComponents, timeComponents] = dateStartToday.split(" ");
  [day, month, year] = dateComponents.split("/");
  const [hours, minutes, seconds] = timeComponents.split(":");

  const todayStartUnix = new Date(
    +year,
    +month,
    +day,
    +hours,
    +minutes,
    +seconds
  ).getTime();

  const unixToday = new Date().getTime();
  return unixToday - todayStartUnix;
};

export const timeDifference = (dateUnix: Date) =>
  new Date().getTime() - dateUnix;
