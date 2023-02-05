// 计算一个阶乘

function factorialIterative(number) {
  if (number < 0) {
    return undefined;
  }
  let total = 1;
  for (let n = number; n > 1; n--) {
    total = total * n;
  }
  return total;
}

console.log(factorialIterative(5));

function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}
console.log(factorial(5));

// 求 斐波那契数列
function fibonacciIterative(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;

  let fibNMInus2 = 0;
  let fibNMinus1 = 1;
  let fibN = n;
  for (let i = 2; i <= n; i++) {
    fibN = fibNMinus1 + fibNMInus2;
    fibNMInus2 = fibNMinus1;
    fibNMinus1 = fibN;
  }
  return fibN;
}

console.log(fibonacciIterative(3));

// 递归  斐波那契数列

function fibonacci(n) {
  if (n < 1) return 0; // {1}
  if (n <= 2) return 1; // {2}
  return fibonacci(n - 1) + fibonacci(n - 2); // {3}
}

console.log(fibonacci(5));

//记忆化斐波那契数列
function fibonacciMemoization(n) {
  const memo = [0, 1]; // {1}

  const fibonacci = (n, memo) => {
    console.log('57', memo);
    if (memo[n] != null) return memo[n]; // {2}
    console.log(28,fibonacci(n - 1, memo),fibonacci(n - 2, memo));
    return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)); // {3}
  };

  return fibonacci(n, memo);
}

console.log(fibonacciMemoization(5));
