function stray(numbers) {
  return numbers.reduce((acc,curr)=>acc^curr)
}