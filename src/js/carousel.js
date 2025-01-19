const buttons = document.querySelectorAll("[data-carousel-button]");
let intervalId;

function startCarousel() {
	intervalId = setInterval(() => {
		const carousel = document.querySelector("[data-carousel]");
		const slides = carousel.querySelector("[data-slides]");
		const activeSlide = slides.querySelector("[data-active]");
		const offset = 1;

		let newIndex = [...slides.children].indexOf(activeSlide) + offset;
		if (newIndex >= slides.children.length) newIndex = 0;

		slides.children[newIndex].dataset.active = true;
		delete activeSlide.dataset.active;
	}, 7000);
}

startCarousel();

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		clearInterval(intervalId);
		startCarousel();

		const offset = button.dataset.carouselButton === "next" ? 1 : -1;
		const slides = button
			.closest("[data-carousel]")
			.querySelector("[data-slides]");

		const activeSlide = slides.querySelector("[data-active]");
		let newIndex = [...slides.children].indexOf(activeSlide) + offset;
		if (newIndex < 0) newIndex = slides.children.length - 1;
		if (newIndex >= slides.children.length) newIndex = 0;

		slides.children[newIndex].dataset.active = true;
		delete activeSlide.dataset.active;
	});
});
