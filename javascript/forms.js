// let nm = document.querySelector("#name");
// let form = document.querySelector("form");
// let hideDiv = document.querySelector("#hide");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   if (nm.value.length <= 2) {
//     hideDiv.style.display = "initial";
//   }else{
//      hideDiv.style.display = "none";
//   }
// });

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  document.querySelector("#emailError").textContent = "";
  document.querySelector("#passwordError").textContent = "";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,:;^#_~\-+=(){}[\]|\\<>?/])[A-Za-z\d@$!%*?&.,:;^#_~\-+=(){}[\]|\\<>?/]{8,}$/;

  let validEmail = emailRegex.test(email.value);
  let validPassword = passwordRegex.test(password.value);

  let isValid = true;

  if (validEmail === false) {
    let ee = document.querySelector("#emailError");
    ee.textContent = "Email is Invalid";
    ee.classList.add("error");
    ee.style.display = "initial";
    isValid = false;
  }

  if (validPassword === false) {
    let pe = document.querySelector("#passwordError");
    pe.textContent = "Password is Invalid";
    pe.classList.add("error");
    pe.style.display = "initial";
    isValid = false;
  }

  if (isValid) {
    document.querySelector("#resultMessage").textContent =
      "Everything is correct";
    email.value=""
    password.value=""
  }else {
    document.querySelector("#resultMessage").textContent = "";
  }
});
