const guardNum = (v: number | string): v is number => typeof v === "number";
const sumArr = (vals: number[]) => vals.reduce((acc, v) => acc + v, 0);

export { guardNum, sumArr };