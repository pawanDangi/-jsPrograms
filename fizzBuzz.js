for (let i = 1; i <= 100; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
    console.log('FizzBuzz', i)
    continue;
  }
  if (i % 3 === 0) {
    console.log('Fizz', i)
    continue;
  }
  if (i % 5 === 0) {
    console.log('Buzz', i)
    continue;
  }
}