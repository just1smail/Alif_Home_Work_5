const copyObject = (obj) => {
  return { ...obj };
};

const original = { name: "Ismail", age: 17 };
const copy = copyObject(original);

console.log(copy);
console.log(original == copy);