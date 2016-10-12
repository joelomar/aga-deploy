var but = document.querySelector('#enter');
var nameInp = document.querySelector('#name_input');
var lastInp = document.querySelector('#last_input');
var emailInp = document.querySelector('#email_input');
var puebloInp = document.querySelector('#pueblo_input');
var phoneInp = document.querySelector('#phone_input');
var luzInp = document.querySelector('#luz_input');
var dataHold = document.querySelector('#data_hold');
var dataHold2 = document.querySelector('#data_hold2');

var nameVal;
var lastnameVal;
var emailVal;
var puebloVal;
var phoneVal;
var luzVal;
var luzResult;
var luzAeeResult;

but.onclick = function() {

	nameVal = nameInp.value;
	lastnameVal = lastInp.value;
	emailVal = emailInp.value;
	puebloVal = puebloInp.value;
	phoneVal = phoneInp.value;
	luzVal = luzInp.value;

    respond();

};

function luzPlus() {

      luzResult = luzVal * 0.15;

      return luzResult;
}


function luzAeePlus() {

      luzAeeResult = luzVal * 0.22;

      return luzAeeResult;
}


function respond() {

      $("#box").hide();
      $("#page_Holder").show();
      dataHold.innerHTML = "$" + luzPlus();
      dataHold2.innerHTML = "$" + luzAeePlus();

}
	
