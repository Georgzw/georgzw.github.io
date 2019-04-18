//window.onload = setContact

//function setContact() {
    var userJonas = 'Jonas.barrskog', domainJonas = 'gmail.com'
element = document.getElementById('mailJonas');
element.innerHTML = userJonas + '@' + domainJonas;
element.href = 'mailto:' + userJonas + '@' + domainJonas;

var number1 = '+4672', number2 = '7250001'
element = document.getElementById('nummer');
element.innerHTML = number1 + number2;
