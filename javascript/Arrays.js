// let arr = [1, 2, 3, 4, 5];
// arr[4] = 9;

// arr.push(100);
// arr.push(100);
// arr.pop();
// arr.shift();
// arr.unshift(0);
// arr.unshift(0);
// arr.splice(3)
// console.log(arr);

//splice
// let fruits = ["apple", "banana", "mango", "orange", "grape"];

// fruits.splice(2, 1);
// console.log(fruits);

// fruits.splice(2, 0, "pear", "kiwi");
// console.log(fruits);

// fruits.splice(4,1,"papaya");
// console.log(fruits);

// fruits.splice(5);
// console.log(fruits);

// let numbers = [1100, 202, 0, 400, 50, 4, 7000];
// let s=numbers.sort((a,b)=>{ return b-a;})
// console.log(s);
// let rev=numbers.reverse();
// console.log(rev);
// let middle = numbers.slice(2, 5);
// console.log(middle);

// let last = numbers.slice(-4);
// console.log(last);

// let entire = numbers.slice(0);
// console.log(entire);

// const numbers = [10, 15, 20, 25, 30, 35];

// let even=numbers.filter((num)=>{if (num%2===0) return true; {
// }})

// console.log(even);

// numbers.forEach(function(num){
//   console.log(num*2);
// });

// let double = numbers.map(function (n) {
//   return n * 2;
// });

// console.log(double);

// let nums = [2, 7, 15, 20, 25];

// let n=nums.find(function(num){
//   return num>18;
// })

// console.log(n)

// let nums = [5, 8, 13, 20];
// let g=nums.some(function(v){
//   return v>15;
// });
// console.log(g)

// let ev=nums.every(function(v){
//   return v>=5;
// })
// console.log(ev)

// let array=[10, 15, 20, 25, 30, 35];
// let [f,s,...all]=array;
// console.log(f,s,all);

// let colors = ["red"];
// let [primary, secondary] = colors;
// console.log(primary, secondary);

// let fruits = ["apple", "banana", "mango", "orange"];

// let [firstFruit,,thirdFruit,...remainingFruits]=fruits;
// console.log(firstFruit,thirdFruit);
// console.log(remainingFruits);

// let x = 1, y = 2, z = 3;
// [x,y,z]=[z,x,y];
// console.log(x,y,z)

// let array=[10, 15, 20, 25, 30, 35];
// let copiedArray=[...array];
// console.log(copiedArray)

// let fruits=["Apple","Banana"]
// fruits.push("Mango");
// fruits.unshift("Pineapple")

// fruits.splice(2,1,"kiwi")
// console.log(fruits);

// let color=["Green","Yellow"]

// color.splice(1,0,"Red","Blue")
// console.log(color)

// let items=[1,2,3,4,5,6]

// let mid=items.slice(2,5)
// console.log(mid)

// let fruits = ["apple", "mango", "orange","banana",];
// fruits.sort().reverse()

// let arr=[1,2,3,4];

// let sqr=arr.map(function(s){
//   return s**2;
// })
// console.log(sqr)

// let arr=[5,12,8,20,3]

// let g=arr.filter(n=>n>10)
// console.log(g)

// let arr=[10,20,30]

// let sum=arr.reduce((acc,num)=>{
//   return acc+num;
// },0)


// let fruits = ["apple", "mango", "orange","banana",];
// console.log(fruits.indexOf("mango"))
// console.log(fruits.indexOf("kiwi"))

// console.log(fruits.includes("kiwi"))
// console.log(fruits.includes("mango"))

// let array=[10, 15, 20, 25, 30, 35];
// let i=array.findIndex(n=>n>20 )
// console.log(i)

// let numbers = [5, 12, 8, 130, 44];
// console.log(numbers.indexOf(8))
// console.log(numbers.includes(100))
// let g=numbers.findIndex(n=> n>50)
// console.log(g)

