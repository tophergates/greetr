;(function(){
  "use strict";

  var loginBtn = document.querySelector('#loginBtn');
  loginBtn.addEventListener('click', function(){
    var loginDiv    = document.querySelector('#loginDiv');
    var txtInputs   = document.querySelectorAll('input[type=text]');
    var lang        = document.querySelector('#language').value;
    var formal      = (document.querySelector('input[name=formal]:checked').value === '1') ? true : false;
    var loginGreetr = G$(txtInputs[0].value, txtInputs[1].value);

    // Show the greeting
    loginGreetr.setLang(lang).HTMLGreeting('#greeting', formal).log();
  });
}());
