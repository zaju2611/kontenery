const burgerButton = document.querySelector(".burger-button");
const navMenu = document.querySelector(".nav-menu");
const closeButton = document.querySelector(".close-menu");
const menuItems = document.querySelectorAll(".nav-menu li a");

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
