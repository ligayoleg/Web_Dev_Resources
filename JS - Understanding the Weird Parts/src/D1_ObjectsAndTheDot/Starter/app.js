let person = new Object();

person["firstname"] = "Tony";
person["lastname"] = "Alicea";
person.age = 23;

let firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);
console.log(person.lastname);
console.log(person.age);

//add another property to object person another object.
person.address = new Object();
person.address.homeNum = 535;
person.address.street = "Neptune Avenue";
person.address.apartment = "15D";
person.address.city = "Brookyn";
person.address.state = "New York";
person.address.zip = 11224;
console.log(person.address);
