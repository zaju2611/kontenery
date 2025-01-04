const footerYear = document.querySelector(".footer_year");

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

const addActiveClassToFooterLink = () => {
	const currentPath = window.location.pathname; // Pobiera ścieżkę URL bez domeny i portu
	const footerLinks = document.querySelectorAll(".footer-nav a"); // Wszystkie linki w stopce

	footerLinks.forEach((link) => {
		const linkPath = new URL(link.href).pathname; // Pobiera ścieżkę z atrybutu href linku
		if (linkPath === currentPath) {
			link.classList.add("activeFooter");
		}
	});
};

addActiveClassToFooterLink();
