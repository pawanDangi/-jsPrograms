const countChar = (string, char) => {
  if (!(typeof string === 'string' || string instanceof String)) console.log('Please provide a string')
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) count++;
  }
  return count;
}

console.log(countChar('abdBdhBsavbFdhBBb', 'h'));