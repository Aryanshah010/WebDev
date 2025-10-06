let disvalue = document.querySelector(".displayValue");
let btns = document.querySelectorAll("button");

let currentString = "";
let previousString = "";

btns.forEach((button) => {
  button.addEventListener("click", (b) => {
    if (
      b.target.textContent != "=" &&
      b.target.textContent != "AC" &&
      b.target.textContent != "C"
    ) {
      previousString = b.target.textContent;
      disvalue.textContent += previousString;
    } else if (b.target.textContent == "AC") {
      clearDisplay();
    } else if (b.target.textContent == "C") {
      currentString = disvalue.textContent;
      previousString = currentString.substring(0, currentString.length - 1);
      if (!isNaN && "Error") {
        disvalue.textContent = previousString;
      }
    }
    if (b.target.textContent == "=") {
      try {
        let result = eval(disvalue.textContent);
        disvalue.textContent = result;
      } catch (error) {
        disvalue.textContent = "Error";
      }
    }
  });
});

function clearDisplay() {
  disvalue.textContent = "";
  currentString = "";
  previousString = "";
}
