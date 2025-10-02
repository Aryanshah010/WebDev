// setTimeout(() => {
//   console.log("hello in 3 second");
// }, 3000);

// setInterval(() => {
//   console.log("hello in 3 second");
// }, 3000);

// let st=setTimeout(() => {
//   console.log("hello in 3 second");
// }, 3000);

// clearTimeout(st)

// let count = 11;
// let inteval = setInterval(() => {
//   if (count >= 1) {
//     count--;
//     console.log("Downloading in..." + count);
//   } else {
//     clearInterval(inteval);
//   }
// }, 1000);

let progbar = document.querySelector(".progress-bar");
let percent = document.querySelector(".percent");
let alert = document.querySelector(".alert");
let per = 0;
let int = setInterval(() => {
  if (per < 100) {
    percent.textContent = `${per + 1}%`;
    per++;
    progbar.style.width = `${per}%`;
  } else {
    document.querySelector(".title").textContent = "Downloaded!";
    alert.classList.add("show");
    setTimeout(() => {
      alert.style.display = "none";
    }, 3000);
    clearInterval(int);
  }
}, 3000 / 100);
