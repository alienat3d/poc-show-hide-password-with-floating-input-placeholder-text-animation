'use strict';

let password = document.querySelector('#password');
let togglePassword = document.querySelector('#toggle');

togglePassword.addEventListener('click', () => {
  if (password.type === 'password') {
    password.setAttribute('type', 'text');
    togglePassword.classList.add('hide-password');
  } else {
    password.setAttribute('type', 'password');
    togglePassword.classList.remove('hide-password');
  }
});
