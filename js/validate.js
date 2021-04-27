function validateLoginForm() {
	var email = document.forms.loginForm.idemail.value;
	var pass = document.forms.loginForm.idpass.value;
	if ((email === '') || (pass === '')) {
		alert('Please fill in all required fields');
		return false;
	}
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!re.test(String(email))) {
		alert('Please fill in correct email');
		return false;
	}
}
function validateRegForm() {
	var name = document.forms.registerForm.idname.value;
	var email = document.forms.registerForm.idemail.value;
	var phone = document.forms.registerForm.idphone.value;
	var pass = document.forms.registerForm.idpass.value;
	var passb = document.forms.registerForm.idpassb.value;

	if ((name === '') || (email === '') || (phone === '') || (pass === '') || (passb === '')) {
		alert('Please fill in all required fields');
		return false;
	}

	else if ((pass != passb)) {
		alert('Please make sure your password is matched with re-enter password');
		return false;
	}


	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!re.test(String(email))) {
		alert('Please correct your email');
		return false;
	}

	var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{5})$/;
	if (phone.match(phoneno)) {
		return true;
	}
	else {
		alert('Please enter a valid phone number');
		return false;
	}

}
