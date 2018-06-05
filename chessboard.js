for (let i = 1; i <= 8; i++) {
  let string = ''
  for (let j = 1; j <= 8; j++) {
    if (i % 2 !== 0) {
      if (j % 2 === 0) {
        string += '#';
      } else {
        string += ' ';
      }
    } else {
      if (j % 2 === 0) {
        string += ' ';
      } else {
        string += '#';
      }
    }
  }
  console.log(string)
}