function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    let count = 0;
    let temp = A[i];

    // count how many times temp appears
    for (let j = 0; j < A.length; j++) {
      if (A[j] === temp) {
        count++;
      }
    }

    // if count is odd, return it
    if (count % 2 !== 0) {
      return temp;
    }
  }
}