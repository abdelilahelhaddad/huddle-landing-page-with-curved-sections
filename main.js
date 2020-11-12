let form = document.getElementById('form');
let email = document.getElementById('email');


form.addEventListener('submit', e => {
	e.preventDefault();
	emailChecker();
	emailCheckerEmpty();
});

function emailChecker(){
	let Email = email.value;
	if (!isValid(Email)) {
		document.getElementById("error").textContent = "Check your email please";
		email.classList.add("error");
	}
	else{
    document.getElementById("error").textContent = "";
    email.classList.remove("error");
	}
}

function emailCheckerEmpty(){
	let Email = email.value;
  if (Email.trim() === '') {
		document.getElementById("error").textContent = "Check your email please";
		email.classList.add("error");
	}
}

function isValid(Email) {
	const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regx.test(String(Email).toLowerCase());
}