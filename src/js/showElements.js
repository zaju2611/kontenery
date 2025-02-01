const elements = document.querySelectorAll(".hidden-element");

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("show");
			}
		});
	},
	{ threshold: 0.1 }
);
3;

elements.forEach((el) => observer.observe(el));
