const sumLargestNumbers = data => {
  let max = [0, 0];
  for (const num of data) {
    if (num > max[0] && num > max[1]) {
      max[0] = max[1];
      max[1] = num;
    } else if (num > max[0]) {
      max[0] = num;
    }
  }
  return max[0] + max[1];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));