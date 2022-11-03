const divide_candy = (n: number) => {
  const result: number[] = [];
  for (let i = 0; i <= n / 2; i++) {
    if (n % (i + 1) === 0) {
      result.push(i);
      if (i !== n / i) result.push(n / (i + 1) - 1);
    }
  }
  return result.sort((a, b) => a - b);
};
