class Validation {
  constructor() {
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton(event) {
    const inputs = Array.from(document.querySelectorAll(".form__input"));
    const button = document.querySelector(".form__button");

    if (inputs.every((elem) => elem.checkValidity())) {
      button.removeAttribute("disabled");
      button.classList.add("form__button_active");
    } else {
      button.setAttribute("disabled", true);
      button.classList.remove("form__button_active");
    }
  }
}

const validation = new Validation();

document.querySelector(".form").addEventListener("input", validation.toggleButton);