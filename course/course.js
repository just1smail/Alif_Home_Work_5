const course = {
  title: "JS Advanced",
  instructor: "Farrukh Gulboev",
  duration: 48,
  price: 600,
};

const courseValues = Object.values(course);
courseValues.forEach((value) => {
  console.log(value);
});
