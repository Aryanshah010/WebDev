// localStorage.setItem("name","Aryan");
// localStorage.setItem("name","Aryan Shah");
// localStorage.setItem("age","21")
// // localStorage.removeItem("age")
// console.log(localStorage.getItem("age"));
// localStorage.clear();
// sessionStorage.setItem("isvalied",true);

// localStorage.setItem("myfriends", JSON.stringify(["raju","adi","dipu"]));
// let gi=JSON.parse(localStorage.getItem("myfriends"));
// console.log(gi);

//Theme changer
let body = document.querySelector("body");
let btn = document.querySelector("button");

function devicetheme() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    body.classList.add("light");
    body.classList.remove("dark");
  }
}

function getthemelocalS() {
  if (!localStorage.getItem("theme")) {
    devicetheme();
  } else {
    body.classList.add(localStorage.getItem("theme"));
  }
}
getthemelocalS();

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
      devicetheme();
    }
  });

btn.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.add("light");
    body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.add("dark");
    body.classList.remove("light");
    localStorage.setItem("theme", "dark");
  }
});
