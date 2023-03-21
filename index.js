//
// practice
//

let inputs = document.querySelectorAll("input");

let btn = document.querySelector("button");

let valid = false;

let form = document.forms[0];

window.onload = () => {
   inputs[0].focus();
};

inputs.forEach((element, index1) => {
   let currentInput = element;
   let nextInput = element.nextElementSibling;
   let previousInput = element.previousElementSibling;

   currentInput.addEventListener("keyup", (e) => {
      if (currentInput.value.length > 1) {
         currentInput.value = currentInput.value.slice(0, 1);
      }
      // if (currentInput.value.length > 1) {
      //    currentInput.value = "";
      // }
      if (currentInput.value.length === 1) {
         nextInput.removeAttribute("disabled");
         nextInput.focus();
         if (index1 !== inputs.length - 1) {
            currentInput.setAttribute("disabled", true);
         }
      }
      if (e.key === "Backspace" && index1 >= 1) {
         previousInput.removeAttribute("disabled");
         currentInput.setAttribute("disabled", true);
         previousInput.focus();
      }

      if (inputs[inputs.length - 1].disabled) {
         btn.classList.remove("active");
      } else if (inputs[inputs.length - 1].value.length === 1) {
         btn.classList.add("active");
         valid = true;
         // Auto submitting the form after finishing the code
         // form.submit();
      }
   });
});

form.onsubmit = (e) => {
   if (valid === false) {
      e.preventDefault();
   }
};
