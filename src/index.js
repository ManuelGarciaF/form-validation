import './styles/main.scss';

import errorList from './errors';

errorList.add('You must provide a valid email.', 1, 'email', false);
document.getElementById('email').addEventListener('focusout', (event) => {
  errorList.remove('email');
  if (event.target.textLength === 2 || !event.target.checkValidity()) {
    errorList.add('You must provide a valid email.', 1, 'email');
  }
});

errorList.add("Your emails don't match.", 2, 'email-confirmation', false);
document
  .getElementById('email-confirmation')
  .addEventListener('focusout', (event) => {
    const firstEmail = document.getElementById('email').value;
    errorList.remove('email-confirmation');
    if (event.target.value !== firstEmail) {
      errorList.add("Your emails don't match.", 2, 'email-confirmation');
    }
  });

errorList.add('You must provide a country', 3, 'country', false);
document.getElementById('country').addEventListener('focusout', (event) => {
  errorList.remove('country');
  if (event.target.textLength <= 2) {
    errorList.add('You must provide a country', 3, 'country');
  }
});

errorList.add('You must provide a zip code', 4, 'zip-code', false);
document.getElementById('zip-code').addEventListener('focusout', (event) => {
  errorList.remove('zip-code');
  if (event.target.textLength <= 2) {
    errorList.add('You must provide a zip code', 4, 'zip-code');
  } else if (
    !/^\d+$/.test(event.target.value)
    || event.target.textLength !== 5
  ) {
    errorList.add('Invalid zip code', 5, 'zip-code');
  }
});

errorList.add('You must provide a password', 6, 'password', false);
document.getElementById('password').addEventListener('focusout', (event) => {
  errorList.remove('password');
  if (event.target.textLength < 8) {
    errorList.add(
      'Your password must be at least 8 characters long',
      6,
      'password',
    );
  }
});

errorList.add("Your passwords don't match", 7, 'password-confirmation', false);
document
  .getElementById('password-confirmation')
  .addEventListener('focusout', (event) => {
    const previousPass = document.getElementById('password').value;

    errorList.remove('password-confirmation');
    if (event.target.value !== previousPass) {
      errorList.add("Your passwords don't match", 7, 'password-confirmation');
    }
  });

document.getElementById('form').addEventListener('submit', (event) => {
  console.log(errorList.getLength());
  if (errorList.getLength() !== 0) {
    errorList.refresh();
    event.preventDefault();
  } else {
    alert('yay');
  }
});
