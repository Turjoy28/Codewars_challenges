function fibProd(n) {
  n = BigInt(n); // ensure n is BigInt

  // Step 1: Generate all Fibonacci numbers > 1 up to n
  const fibs = [2n, 3n];
  let a = 2n, b = 3n;
  while (true) {
    const c = a + b;
    if (c > n) break;
    fibs.push(c);
    a = b;
    b = c;
  }

  // Step 2: Memoization
  const memo = new Map();

  // Step 3: Recursive DFS
  function dfs(remaining, startIdx) {
    const key = remaining + ',' + startIdx;
    if (memo.has(key)) return memo.get(key);
    if (remaining === 1n) return 1; // found valid product

    let ways = 0;
    for (let i = startIdx; i < fibs.length; i++) {
      const f = fibs[i];
      if (remaining % f === 0n) {
        ways += dfs(remaining / f, i); // allow repeated use
      }
    }

    memo.set(key, ways);
    return ways;
  }

  return dfs(n, 0);
}

// Example usage:
console.log(fibProd(40n)); // 2
console.log(fibProd(7n));  // 0