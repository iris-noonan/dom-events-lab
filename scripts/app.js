// * Read the instructions inside the readme file carefully

// * Remember to "go live" below. The browser will automatically reload when you save your code.

function init() {

  // ? Task 1

  const toggleClickMe = document.querySelector("#toggle")

  toggleClickMe.addEventListener("click", () => {
      const circle = document.querySelector(".circle");
      circle.classList.toggle("pulse");

  }) 

  // ? Task 2

  const citiesDropdown = document.querySelector("#cities")

  citiesDropdown.addEventListener("change", () => {
    const citySpan = document.querySelector("#city");
    const city = citiesDropdown.options[citiesDropdown.selectedIndex].innerHTML;
    citySpan.innerHTML = city

  }) 

  //  ? Task 3

  const names = document.querySelectorAll(".name");
  const currentSpan = document.querySelector("#current");
  names.forEach(name => {
    name.addEventListener('mouseenter', (event) => {
      currentSpan.innerHTML = event.target.innerHTML;
    });
    name.addEventListener('mouseout', () => {
      currentSpan.innerHTML = null;
    });
  });

  // ? Task 4

  const submitForm = document.querySelector("#subscribe");
  const submitButton = document.querySelector(".submit");

  submitForm.addEventListener("submit", (event) => {
    event.preventDefault()
    submitButton.classList.add("submitted");
    submitButton.innerHTML = "Submitted!"
  });

  // ? Task 5



}

window.addEventListener('DOMContentLoaded', init)
