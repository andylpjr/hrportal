export const getKeyValuePairs = <T>(
  object: T
): { key: keyof T & string; value: any }[] => {
  if (!object) {
    return [];
  }
  const l = [];
  for (const key in object) {
    l.push({ key, value: object[key] });
  }
  //@ts-ignore
  return l;
};

export const jsonClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};
