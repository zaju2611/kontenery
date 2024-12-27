const burgerButton = document.querySelector(".burger-button");
const navMenu = document.querySelector(".nav-menu");
const closeButton = document.querySelector(".close-menu");
const menuItems = document.querySelectorAll(".nav-menu li a");
const parentCategory = document.querySelector(".parent-category");
const menuItem = document.querySelector(".menu-item");

burgerButton.addEventListener("click", () => {
	burgerButton.classList.toggle("open");
	navMenu.classList.toggle("show");
});

closeButton.addEventListener("click", () => {
	navMenu.classList.toggle("show");
});

menuItems.forEach((item) => {
	item.addEventListener("click", function () {
		menuItems.forEach((link) => link.classList.remove("active"));

		this.classList.add("active");
	});
});

parentCategory.addEventListener("click", function (event) {
	event.preventDefault(); // Zapobiega przeładowaniu strony

	// Przełączanie klasy 'active' na elemencie menu-item
	menuItem.classList.toggle("active");
});
