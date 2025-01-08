emailjs.init("gey-b1Y8gOJbQuPdL");

document
	.querySelector(".contact-form")
	.addEventListener("submit", function (event) {
		event.preventDefault();

		if (validateForm(event)) {
			let form = event.target;
			let formData = new FormData(form);

			let formObject = {};
			formData.forEach(function (value, key) {
				formObject[key] = value;
			});

			if (!formObject.consent) {
				alert("Musisz wyrazić zgodę na przetwarzanie danych!");
				return;
			}

			emailjs.send("service_8bjzcai", "template_2zxzxce", formObject).then(
				function (response) {
					console.log("Sukces:", response);

					const formContainer = document.querySelector(
						".contact-form-container"
					);
					formContainer.innerHTML = `
                    <div class='info-box'>
                        <h2>Wiadomość wysłana!</h2>
                        <p>Skontaktujemy się z Tobą najszybciej jak to możliwe.</p>
                        </div>
                    `;
				},
				function (error) {
					console.log("Błąd:", error);
					alert("Coś poszło nie tak. Spróbuj ponownie.");
				}
			);
		}
	});

const form = document.querySelector(".contact-form");
const mainError = document.querySelector(".error-main");
const errorMessages = document.querySelectorAll(".error");

function resetErrors() {
	errorMessages.forEach((error) => (error.style.opacity = "0"));
	mainError.style.opacity = "0";
	form.querySelectorAll("input, textarea").forEach((field) => {
		field.classList.remove("error-border");
	});

	const consentLabel = document.querySelector("label[for='consent']");
	consentLabel.style.color = "";
}

function validateForm(event) {
	let isValid = true;
	resetErrors();

	const nameField = document.getElementById("name");
	const emailField = document.getElementById("email");
	const messageField = document.getElementById("message");
	const consentField = document.getElementById("consent");

	if (!nameField.value.trim()) {
		nameField.nextElementSibling.style.opacity = "1";
		nameField.classList.add("error-border");
		isValid = false;
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(emailField.value.trim())) {
		emailField.nextElementSibling.style.opacity = "1";
		emailField.classList.add("error-border");
		isValid = false;
	}

	if (!messageField.value.trim()) {
		messageField.nextElementSibling.style.opacity = "1";
		messageField.classList.add("error-border");
		isValid = false;
	}

	const consentLabel = document.querySelector("label[for='consent']");
	if (!consentField.checked) {
		consentField.parentElement.nextElementSibling.style.opacity = "1";
		consentLabel.style.color = "red";
		isValid = false;
	}

	if (!isValid) {
		mainError.style.opacity = "1";
		event.preventDefault();
	}

	return isValid;
}
