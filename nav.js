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

const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

dropdownToggles.forEach((toggle) => {
	toggle.addEventListener("click", (e) => {
		e.preventDefault();

		const menuItem = toggle.closest(".menu-item");

		document.querySelectorAll(".menu-item.active").forEach((item) => {
			if (item !== menuItem) {
				item.classList.remove("active");
				const subMenu = item.querySelector(".sub-menu");
				if (subMenu) {
					subMenu.style.maxHeight = null;
				}
			}
		});

		const subMenu = menuItem.querySelector(".sub-menu");
		if (menuItem.classList.contains("active")) {
			menuItem.classList.remove("active");
			subMenu.style.maxHeight = null;
		} else {
			menuItem.classList.add("active");
			subMenu.style.maxHeight = subMenu.scrollHeight + "px";
		}
	});
});
