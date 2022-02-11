class Validation {
  toggleButton = () => {
    const inputs = Array.from(document.querySelectorAll('.form__input'));
    const button = document.querySelector('.form__button');

    if (inputs.every(elem => elem.checkValidity())) {
      button.removeAttribute('disabled');
      button.classList.add('form__button_active');
    } else {
      button.setAttribute('disabled', true);
      button.classList.remove('form__button_active');
    }
  }
}

function submitForm(e) {
  e.preventDefault();

  let result = {};

  Array.from(form.elements).forEach(el => {
    el.value ? result[el.name] = el.value : '';
  });

  console.log(result);
}

const validation = new Validation();
const form = document.forms.register;

form.addEventListener('input', validation.toggleButton);
form.addEventListener('submit', submitForm);