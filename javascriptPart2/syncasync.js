// let pr = new Promise(function (res, rej) {
//   setTimeout(() => {
//     let random = Math.floor(Math.random() * 10);
//     if (random > 5) res("greater then 5 " + random);
//     else rej("number is less then 5 " + random);
//   }, 3000);
// });

// pr.then(function (value) {
//   console.log(value);
// }).catch(function (value) {
//   console.log(value);
// });

// async function test() {
//   try {
//     let a = await pr;
//     console.log(a);
//   } catch (error) {
//     console.log(error);
//   }
// }
// test();

// function getData(userID) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting all data", userID);
//       resolve()
//     }, 2000);
//   });
// }

// (async function() {
//   await getData(1);
//   await getData(2);
//   await getData(3);
// })()