const burgerButton = document.querySelector(".burger-button");
const navMenu = document.querySelector(".nav-menu");
const closeButton = document.querySelector(".close-menu");
const menuItems = document.querySelectorAll(".nav-menu li a");
const menuItemsDesktop = document.querySelectorAll(".desktop-nav .menu a");
const currentPath = window.location.pathname;

burgerButton.addEventListener("click", () => {
	burgerButton.classList.toggle("open");
	navMenu.classList.toggle("show");
});

closeButton.addEventListener("click", () => {
	navMenu.classList.toggle("show");
});

menuItems.forEach((item) => {
	if (currentPath === item.getAttribute("href")) {
		menuItems.forEach((link) => link.classList.remove("active"));
		item.classList.add("active");
	}
});

menuItemsDesktop.forEach((item) => {
	if (currentPath === item.getAttribute("href")) {
		menuItemsDesktop.forEach((link) =>
			link.closest("li").classList.remove("activeDesktop")
		);

		const parentLi = item.closest("li");
		if (parentLi) {
			parentLi.classList.add("activeDesktop");

			const parentMenu = parentLi.closest(".menu > li");
			if (parentMenu) {
				parentMenu.classList.add("activeDesktop");
			}
		}
	}
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
