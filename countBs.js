const countBs = (string) => {
  if (!(typeof string === 'string' || string instanceof String)) console.log('Please provide a string')
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'B') count++;
  }
  return count;
}

console.log(countBs('abdBdhBsavbFdhBBb'));