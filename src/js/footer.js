const footerYear = document.querySelector(".footer_year");

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

const addActiveClassToFooterLink = () => {
	const currentPath = window.location.pathname;
	const footerLinks = document.querySelectorAll(".footer-nav a");

	footerLinks.forEach((link) => {
		const linkPath = new URL(link.href).pathname;
		if (linkPath === currentPath) {
			link.classList.add("activeFooter");
		}
	});
};

addActiveClassToFooterLink();
