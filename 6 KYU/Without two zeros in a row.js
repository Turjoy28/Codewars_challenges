function zeros(n) {
  n = BigInt(n); // Ensure we can handle large n

  if (n === 0n) return 1n; // Base case
  if (n === 1n) return 2n; // Base case

  let endWith1 = 1n; // f(1)
  let endWith0 = 1n; // f(0)

  for (let i = 2n; i <= n; i++) {
    const newEndWith1 = endWith1 + endWith0; // next value ending with 1
    const newEndWith0 = endWith1;           // next value ending with 0

    endWith1 = newEndWith1;
    endWith0 = newEndWith0;
  }

  return endWith1; // THIS is the fix: we want numbers ending with 1
}