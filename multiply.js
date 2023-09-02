const pow = (m, n) => {
  if (n < 1) {
    return 1;
  }
  return m * pow(m, n - 1);
};

console.log(pow(2, 8));

const mul = (m, n) => {
  if (n < 1) {
    return 0;
  }
  return m + mul(m, n - 1);
};

console.log(mul(2, 8));
