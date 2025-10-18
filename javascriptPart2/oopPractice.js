// function CreatePencil(name, price, color) {
//   this.name = name; //this means blank object and .name is key of the object whose value is given when the function is called.
//   this.price = price;
//   this.color = color;
// }

// CreatePencil.prototype.write = function (text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = text;
//     h1.style.color = this.color;
//     document.body.append(h1);
//   };

// class CreatePencil {
//   constructor(name, price, color) {
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.createdElements = [];
//   }

//   write(text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = text;
//     h1.style.color = this.color;
//     document.body.append(h1);

//     this.createdElements.push(h1);
//   }

//   erase() {
//     if (this.createdElements.length > 0) {
//       this.createdElements.forEach((elem) =>{
//         elem.style.transition="opacity 0.5s ";
//         elem.style.opacity="0";
//         setTimeout(function(){elem.remove()},500);
//       });
//       this.createdElements=[];
//     }
//   }
// }

// let pencil1 = new CreatePencil("Dooms", 20, "black");
// let pencil2 = new CreatePencil("natraj", 10, "blue");

// class User {
//   constructor(name, address, username, email, role) {
//     this.name = name;
//     this.address = address;
//     this.username = username;
//     this.email = email;
//     this.role = "user";
//   }

//   checkRole(){
//     console.log(`you are a ${this.role}`);

//   }

//   write(text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = `${this.name} : ${text}`;
//     document.body.appendChild(h1);
//   }
// }

// class Admin extends User {
//   constructor(name, address, username, email, position) {
//     super(name, address, username, email);
//     this.role = "admin";
//     this.position = position;
//   }
//   remove() {
//     let allh1 = document.querySelectorAll("h1");
//     allh1.forEach((elem) => {
//       elem.remove();
//     });
//   }
// }

// let u1 = new User("Aryan", "BTM", "aryanshah010", "aryanshah001@gmail.com");
// let a1 = new Admin(
//   "Raju",
//   "Janakpur",
//   "raju10",
//   "rajukush110@gmail.com",
//   "junior manager"
// );

// class Book {
//   constructor(title, author, price) {
//     this.title = title;
//     this.author = author;
//     this.price = price;
//   }

//   getInfo() {
//     return `${this.title} by ${this.author} costs $${this.price}`;
//   }
// }

// let book1 = new Book("Atomic Habits", "James Clear", 350);
// let book2 = new Book("Power of Subconsious mind", "aryan shah", 250);
// let book3 = new Book("The law of power", "raju", 400);
