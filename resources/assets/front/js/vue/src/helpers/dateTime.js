export const dateStr2yyyymmdd = (dateStr) => {
  const date = new Date(dateStr);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const monthStr = month < 10 ? `0${month}` : month;
  const dayStr = day < 10 ? `0${day}` : day;
  return `${date.getFullYear()}-${monthStr}-${dayStr}`;
};

export default {
  dateStr2yyyymmdd,
};
