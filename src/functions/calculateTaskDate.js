const padTo2Digits = (num) => num.toString().padStart(2, "0");

const formatDate = (date) =>
  [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join("/");

export const getTime = (initialDate) => {
  const dateTime = new Date(initialDate).getTime();
  const newDateTime = Date.now();
  const leftTime = newDateTime - dateTime;

  const minutes = Math.floor(leftTime / (1000 * 60));
  const hs = Math.floor(minutes / 60);
  const days = Math.floor(hs / 24);

  return minutes < 1
    ? "seconds ago"
    : minutes < 60
    ? minutes + " mins ago"
    : hs < 24
    ? hs + ` ${hs === 1 ? "hr" : "hs"} ago`
    : days < 7
    ? days + ` ${days === 1 ? "day" : "days"} ago`
    : formatDate(new Date(initialDate));
};
