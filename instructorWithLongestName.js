const instructorWithLongestName = instructors => {
  let longest = {name: '', course: ''};
  for (const instructor of instructors) {
    const name = instructor.name;
    const course = instructor.course;
    if (name.length > longest.name.length) [longest['name'], longest['course']] = [name, course];
  }
  return longest;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));