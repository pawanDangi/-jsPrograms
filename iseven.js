const isEven = (a) => {
  if (isNaN(a) || a < 0) console.log('Please provide a positive, whole number')
  if (a === 0) return true
  if (a === 1) return false
  return isEven(a - 2)
}

console.log('50', isEven(50))
console.log('75', isEven(75))