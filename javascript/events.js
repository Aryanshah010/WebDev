// let p=document.querySelector("p")
// p.addEventListener("click",()=>{
//   p.style.color="green";
// })

// function dbc(){
//   p.style.color="orange";
// }
// p.addEventListener("dblclick",dbc);
// p.removeEventListener("dblclick",dbc)

// let inp = document.querySelector("input");

// inp.addEventListener("input", function (d) {
//   if (d.data !== null) {
//     console.log(d.data);
//   }
// });

// let sel = document.querySelector("select");
// let h3 = document.querySelector("h3");
// sel.addEventListener("change", (e) => {
//   h3.innerHTML = `Selected Item:${e.target.value}`;
// });

// let h1=document.querySelector("h1")
// window.addEventListener("keydown",(e)=>{
//   if (e.key === " ") {
//     h1.textContent="space";
//   }else{
//     h1.textContent=e.key;
//   }
// })

// let btn = document.querySelector("#btn");
// let inp = document.querySelector("#fileInput");
// btn.addEventListener("click", () => {
//   inp.click();
// });

// inp.addEventListener("change", (e) => {
//   let file=e.target.files[0];
//   if (file) {
//     btn.textContent=file.name;
//   }
// });

//Dynamically create a card when clicked submit button on the form
// let form = document.querySelector("form");
// let allInp = document.querySelectorAll("input");
// let mainDiv = document.querySelector(".maincontent");
// form.addEventListener("submit", function (details) {
//   details.preventDefault();
//   let cardDiv = document.createElement("div");
//   cardDiv.classList.add("card");

//   let prof = document.createElement("div");
//   prof.classList.add("profile");

//   let image = document.createElement("img");
//   image.setAttribute("src", allInp[0].value);

//   let heading3 = document.createElement("h3");
//   heading3.textContent = allInp[1].value;
//   let heading5 = document.createElement("h5");
//   heading5.textContent = allInp[2].value;
//   let paragraph = document.createElement("p");
//   paragraph.textContent = allInp[3].value;

//   prof.appendChild(image);
//   cardDiv.appendChild(prof);
//   cardDiv.appendChild(heading3);
//   cardDiv.appendChild(heading5);
//   cardDiv.appendChild(paragraph);

//   mainDiv.appendChild(cardDiv);

//   allInp.forEach((v) => {
//     if (v.type !== "submit") {
//       v.value = "";
//     }
//   });
// });

// let mo = document.querySelector("#abcd");

// mo.addEventListener("mouseover", () => {
//   mo.style.backgroundColor = "yellow";
// });

// mo.addEventListener("mouseout", () => {
//   mo.style.backgroundColor = "red";
// });

let abcd = document.querySelector("#abcd");

window.addEventListener("mousemove", (d) => {
  abcd.style.top = d.clientY + "px";
  abcd.style.left = d.clientX + "px";
});
