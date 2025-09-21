// sum(10,15);
// sum(12,11);

// function sum(value1,value2) {
//   console.log(value1+value2);
// }

// let s=function (v1,v2) {
//   console.log(v1-v2);
// }

// s(1,"4");

// function sm(a,b) {
//   console.log(a,b)
// }
// sm(undefined)

// function value(...val) {
//   console.log(val)
// }
// value(1,2,3,4,5,9,0);

// function names(nam) {
//   return `${nam}`;
// }

// let n = names("khushi");
// console.log(n);

// let fun = function () {
//   console.log("First class function");
// };
// fun();

// function fc(val) {
//   val();
// }

// fc(function(){
//   console.log("Function as an argument")
// });

// function delaymessage(msg,fun){
//   console.log(msg);
//   fun();
// }

// delaymessage("Loading...",function () {
//   console.log("Done!")
// });

// function checkPermission(role, access) {
//   if (role === "Admin") {
//     access();
//   }else{
//     console.log("Access denied!")
//   }
// }

// checkPermission("Admin", function () {
//   console.log("Access granted!!!");
// });

// function repeat(n, task) {
//   for (let i = 1; i <= n; i++) {
//     console.log("Loop count:", i);
//     task();
//   }
// }

// repeat(3, function () {
//   console.log("Hello");
// });

// function twofun(fun1,fun2) {
//   fun1(); fun2();
// }

// twofun(function(){
//   console.log("First fun")
// },function(){
//     console.log("Second fun")
// });

// function hof() {
//   return function () {
//     console.log("Higher order fuction");
//   };
// }
// hof()();

// let a=10;

// function impure() {
//   a++;
// }

// function pure() {
//   console.log("I am pure");
// }

// pure()

// function closure() {
//   let a = 10;
//   return function () {
//     console.log(a);
//   };
// }

// closure()();

// function one() {
//   let a = 10;
//   function two() {
//     let b = 11;
//     function three() {
//       let c = 9;
//     }
//   }
// }

// let mul=(a,b)=>{
//   return a*b;
// }
// console.log(mul(5,4));

// function uniqueId() {
//   let id=0;
//   return function(){
//     id++;
//     console.log(`id${id}`);
//   }
// }

// let one=uniqueId();
// one()
// one()

// function discountCalc(discount) {
//   return function (price) {
//     return price - price * (discount / 100);
//   };
// }

// let five = discountCalc(5);
// let ten = discountCalc(10);
// let twenty = discountCalc(20);

// console.log(five(2000));
// console.log(ten(1000));
// console.log(twenty(1500));

// function counter() {
//   let count = 0;
//   return {
//     increment() {
//       return ++count;
//     },
//     decrement() {
//       return --count;
//     },
//     reset() {
//       return (count = 0);
//     },
//   };
// }
// let count = counter();
// console.log(count.increment());
// console.log(count.decrement());
// console.log(count.reset());

