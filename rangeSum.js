const range = (start, end) => {
  let array = []
  for (i = start; i <= end; i++) array.push(i);
  return array
}

const sum = (array = []) => {
  let total = 0;
  for (value of array) total += value;
  return total;
}

console.log(sum(range(1, 10)))
