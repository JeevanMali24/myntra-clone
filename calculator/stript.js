/*let String = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      String = eval(String);
      document.querySelector("input").value = String;
    } else if (e.target.innerHTML == "c") {
      String = "";
      document.querySelector("input").value = String;
    } else {
      console.log(e.target);
      String = String + e.target.innerHTML;
      document.querySelector("input").value = String;
    }
  });
});
*/

let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (v) => {
    if (v.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (v.target.innerHTML == "c") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      console.log(v.target);
      string = string + v.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
