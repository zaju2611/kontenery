// Inicjalizacja EmailJS
emailjs.init("gey-b1Y8gOJbQuPdL"); // Zastąp YOUR_USER_ID swoim ID użytkownika

// Funkcja do wysyłania formularza
document
	.querySelector(".contact-form")
	.addEventListener("submit", function (event) {
		event.preventDefault(); // Zapobiega domyślnemu wysyłaniu formularza

		// Przeprowadzamy walidację formularza
		if (validateForm(event)) {
			// Pobieranie danych z formularza
			let form = event.target;
			let formData = new FormData(form);

			// Przekształcenie danych formularza na obiekt JSON
			let formObject = {};
			formData.forEach(function (value, key) {
				formObject[key] = value;
			});

			// Sprawdzanie, czy zgoda została wyrażona
			if (!formObject.consent) {
				alert("Musisz wyrazić zgodę na przetwarzanie danych!");
				return;
			}

			// Wysyłanie formularza przez EmailJS
			emailjs.send("service_l5e2jt4", "template_2zxzxce", formObject).then(
				function (response) {
					console.log("Sukces:", response);

					// Ukrycie formularza i wyświetlenie komunikatu
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

// Walidacja formularza
const form = document.querySelector(".contact-form");
const mainError = document.querySelector(".error-main");
const errorMessages = document.querySelectorAll(".error");

function resetErrors() {
	errorMessages.forEach((error) => (error.style.opacity = "0"));
	mainError.style.opacity = "0";
	form.querySelectorAll("input, textarea").forEach((field) => {
		field.classList.remove("error-border");
	});

	// Przywracamy domyślny kolor tekstu zgody
	const consentLabel = document.querySelector("label[for='consent']");
	consentLabel.style.color = ""; // Usuwamy styl inline
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
		consentLabel.style.color = "red"; // Zmieniamy kolor tekstu na czerwony
		isValid = false;
	}

	if (!isValid) {
		mainError.style.opacity = "1";
		event.preventDefault();
	}

	return isValid; // Zwracamy true, jeśli formularz jest poprawny
}
