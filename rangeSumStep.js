const range = (start, end, step = 1) => {
	if ((step < 0) && (start < end)) return 'Start must be gratter then End for -ve step'
	if ((step > 0) && (start > end)) return 'Start must be less then End for +ve step'
  let array = []
	if (step < 0) for (i = start; i >= end; i += step) array.push(i);
  else for (i = start; i <= end; i += step) array.push(i);
  return array
}

const sum = (array = []) => {
	if (!Array.isArray(array)) return 'Please provide a array'
  let total = 0;
  for (value of array) total += value;
  return total;
}

console.log(range(1, 10), sum(range(1, 10)))

console.log(range(1, 10, 2), sum(range(1, 10, 2)))

console.log(range(5, 2, -1), sum(range(5, 2, -1)))
