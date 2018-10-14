var person = { lastname: "Ligay" };
console.log(person);

person.firstname = "Oleg";

function greet(person) {
  console.log("Hi " + person.firstname);
}

greet({ firstname: "Mary", lastname: "Doe" });
