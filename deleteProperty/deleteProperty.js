const deleteProperty = (obj, propertyName) => {
  delete obj[propertyName];

  return obj;
};

const person = { name: "Ismail", age: 17, city: "Dushanbe" };

const updatedPerson = deleteProperty(person, "city");
console.log(updatedPerson);
