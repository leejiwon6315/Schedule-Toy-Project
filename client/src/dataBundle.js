export const virtualData = {};
export let nextId = Object.keys(virtualData).length;
export const setNextId = () => {
  nextId++;
};

export const daysData = [
  { name: "월", val: 1 },
  { name: "화", val: 2 },
  { name: "수", val: 3 },
  { name: "목", val: 4 },
  { name: "금", val: 5 },
  { name: "토", val: 6 },
];

export const allTimeData = [
  "0800",
  "0830",
  "0900",
  "0930",
  "1000",
  "1030",
  "1100",
  "1130",
  "1200",
  "1230",
  "1300",
  "1330",
  "1400",
  "1430",
  "1500",
  "1530",
  "1600",
  "1630",
  "1700",
  "1730",
  "1800",
  "1830",
  "1900",
  "1930",
  "2000",
  "2030",
];

export const hourData = [
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
];

export const minData = [
  "00",
  "05",
  "10",
  "15",
  "20",
  "25",
  "30",
  "35",
  "40",
  "45",
  "50",
  "55",
];
