// let firstObj={
//   name:"Aryan",
//   age:21,
//   married: false
// };
// Object.freeze(firstObj);
// firstObj.name="Khishi";
// firstObj.address="btm";
// console.log(firstObj);

// let n="name";
// console.log(firstObj[n])

// let fruitDetails = {
//   apple: { color: "red", price: 2 },
//   banana: { color: "yellow", price: 1 },
//   mango: { color: "orange", price: 3 }
// };

// console.log(fruitDetails.banana.price);

// let f = { people1: { name: "aryan" }, people2: { name: "khushi" } };

// let {name}=f.people1;
// console.log(name);

// let task=[]
// task.push(...task,"drink water")
// console.log(task)

// let book={
//   title: "Atomic Habits",
//   Author: "James Clear",
//   Year: 2015
// };
// let { title, Author,Year}=book;
// console.log(title,Author,Year);

// let user={
//   username: "Aryanshah",
//   email: "shaharyan000@gmail.com"
// };
// let {username:name,email:mail}=user;
// console.log(name,mail);

// let movie = {
//   title: "Her",
//   rating: 8.5,
//   language: "English"
// };
// let {country="Unknown"}=movie;
// console.log(country);

// let laptop = { brand: "Apple", specs: { ram: 16, storage: 512 } };
// let {
//   brand,
//   specs: { ram, storage },
// } = laptop;

// console.log(ram,brand,storage);

// let person={
//   name:"aryan",
//   age:21
// };

// function greet({name,age}) {
//   console.log(`hello ${name} age ${age}`);
// }
// greet(person)

// let scores = [
//   { id: 1, score: 90 },
//   { id: 2, score: 50 },
//   { id: 3, score: 60 },
//   { id: 4, score: 30 },
//   { id: 5, score: 10 },
// ];

// for(let i=0; i<scores.length;i++){
//   let {id,score}=scores[i];
//   console.log(id,score);
// }

// let company = {
//   name: "TechCorp",
//   location: {
//     city: "San Francisco",
//     country: "USA",
//   },
//   employees: {
//     ceo: { name: "Alice", age: 45 },
//     developer: { name: "Bob", age: 30 },
//   },
// };

// let {
//   name,
//   location: { city },
//   employees: {
//     ceo: { name: ceoName },
//     developer: { name: devName },
//   },
// } = company;

// console.log(name,city,ceoName,devName);

// let book = {
//   title: "Atomic Habits",
//   Author: "James Clear",
//   Year: 2015,
// };

// console.log(Object.keys(book));

// for (let key in book) {
//   console.log(key, book[key]);
// }

// let obj = {
//   name: "Aryan",
//   age: 21,
//   email: "Shaharyan011@gmail.com",
//   address: {
//     city: "BTM",
//     country: "Nepal",
//   },
// };

// let obj2 = JSON.parse(JSON.stringify(obj));
// console.log(obj);

// obj2.address.city="KTM"
// console.log(obj2);