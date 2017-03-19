;(function(){
  "use strict";

  const loginBtn = document.querySelector('#loginBtn');
  loginBtn.addEventListener('click', function(){
    const loginDiv    = document.querySelector('#loginDiv');
    const txtInputs   = document.querySelectorAll('input[type=text]');
    const lang        = document.querySelector('#language').value;
    const formal      = (document.querySelector('input[name=formal]:checked').value === '1') ? true : false;

    const loginGreetr = G$(txtInputs[0].value, txtInputs[1].value);

    // Hide the login form
    loginDiv.style = 'display: none;';

    // Show the greeting
    loginGreetr.setLang(lang).HTMLGreeting('#greeting', formal).log();
  });
}());
