// function
const numberOfVowels = data => {
  return data.match(/[aeiou]/gi).length;
};

// test
console.log(numberOfVowels('orange'));
console.log(numberOfVowels('lighthouse labs'));
console.log(numberOfVowels('aeiou'));