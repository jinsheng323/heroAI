const transformValue = (obj) => {
  // Write your solution here. You can create any number of helper functions
  const result = {};
  Object.keys(obj).map((key) => {
    if (typeof obj[key] === "number") {
      result[key] = obj[key] + 1;
    } else if (typeof obj[key] === "string") {
      result[key] = obj[key] + " AI";
    } else {
      result[key] = transformValue(obj[key]);
    }
  });
  return result;
};
