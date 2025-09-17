// let marks=70;

// let grade= marks>=90 ? "A+" : marks>=80 ? "A" : marks>=70 ? "B" : "Fail";

// console.log(grade);

// function getGrade(score) {
//   if (score >= 90 && score <= 100) return "A+";
//   if (score >= 80 && score < 90) return "A";
//   if (score >= 70 && score < 80) return "B";
//   if (score >= 60 && score < 70) return "C";
//   if (score >= 33 && score < 60) return "D";
//   if (score >= 0 && score < 33) return "Fail";
//   return "Invalid marks";
// }

// console.log(getGrade(80.5));

//rock, paper, scissor
// function rps(user, computer) {
//   if (user === computer) return "Draw";
//   if (user === "rock" && computer === "scissor") return "User";
//   if (user === "paper" && computer === "rock") return "User";
//   if (user === "scissor" && computer === "paper") return "User";
//   return "Computer";
// }

// console.log(rps("paper","scissor"))

// function vote(age) {
//   switch (true) {
//     case (age >= 21):
//       console.log("You are Adult");
//       break;
//     case (age <= 20 && age>13):
//       console.log("You are a teenager");
//       break;
//     default:
//       console.log("You are a child");
//       break;
//   }
// }

// vote(22);

// for (let index = 1; index < 51; index+=2) {
//   console.log(index);

// }

// let start = 1;

// while (start <= 10) {
//   console.log(start);
//   start += 2;
// }

// for (let index = 1; index <= 30; index++) {
//   if (index === 15) {
//     continue;
//   }
//   console.log(index);
// }

// let i=10;

// while(i>=1){
//   console.log(i);
//   i--;
// }

// for (let index = 2; index <=20; index+=2) {
//   console.log(index);
// }

// let num=1;

// while(num<=15){
//   if (num%2 === 1) {
//     console.log(num)
//   }
//   num++;
// }

// let num=5;

// for(let i=1; i<=10;i++){
//   // console.log(num,"x",i,"=",num*i);
//   console.log(`5 * ${i} = ${5 * i}`);
// }

// let sum=0;

// for (let index = 1; index <=10; index++) {
//   sum+=index;
// }
// console.log(sum);

// for (let index = 1; index <=50; index++) {
//   if(index%3===0){
//     console.log(index);
//   }
// }

// let number = prompt("Enter a number:");

// for (let index = 1; index <= number; index++) {
//   if (index % 2 === 0) {
//     console.log(`${index} is even`);
//   } else {
//     console.log(`${index} is odd`);
//   }
// }

// let count=0;

// for (let index = 1; index <=100; index++) {
//   if (index%3 ===0 && index%5===0) {
//     count+=1;
//     console.log(index);
//   }
// }
// console.log(count);

// for (let index = 1; index <=100; index++){

//    console.log(index)
//    if(index%11===0){
//     break;
//    }

// }

// for (let index = 1; index <=20; index++) {
//   if(index%3===0){
//     continue;
//   }
//   console.log(index);

// }

// let counter=0;

// for(let i=1; i<=100;i++){
//   if (i%2===1) {
//     console.log(i);
//     counter++;
//   }
//   if(counter===5) break;

// }

// let sum=0;

// let num=prompt("Enter a number:");
// let digit=0;

// while (num>0) {
//   digit=num%10;
//   sum=sum+digit;
//   num=Math.floor(num/10);
// }

// console.log(sum);

// let rev=0;

// let num=prompt("Enter a number:");
// let digit=0;

// while (num>0) {
//   digit=num%10;
//   rev=rev*10+digit;
//   num=Math.floor(num/10);
// }

// console.log(rev);

// let count = 0;

// let n = prompt("Enter a number:");

// while (n > 0) {
//   n = Math.floor(n / 10);
//   count++;
// }

// console.log(count);

// let fact=prompt("Enter a number:")
// let h=1;

// for(let i=fact; i>=1;i--){
//   h=h*i;
// }
// console.log(h);

// let palrev = 0;

// let num = Number(prompt("Enter a number:"));

// let temp = num;
// let digit = 0;

// while (num > 0) {
//   digit = num % 10;
//   palrev = palrev * 10 + digit;
//   num = Math.floor(num / 10);
// }

// if (palrev === temp) {
//   console.log("The number is palindrome");
// } else {
//   console.log("The number is not palindrome");
// }

// let armNum = Number(prompt("Enter a number:"));

// let t = armNum;

// let c = 0;

// while (t > 0) {
//   t = Math.floor(t / 10);
//   c++;
// }

// t = armNum;

// let sum = 0;
// let d = 0;

// while (t > 0) {
//   d = t % 10;
//   sum += d ** c;
//   t = Math.floor(t / 10);
// }

// if (sum === armNum) {
//   console.log("The number is Armstrong");
// } else {
//   console.log("The number is not Armstrong");
// }

