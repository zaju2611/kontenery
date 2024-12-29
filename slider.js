let currentIndex = 0;
const sliderBox = document.querySelector(".slider-box");
const images = document.querySelectorAll(".slider-img");
const totalImages = images.length;

function updateSliderPosition() {
	const offset = -currentIndex * 100;
	sliderBox.style.transform = `translateX(${offset}%)`;
}

document.querySelector(".btn-left").addEventListener("click", () => {
	if (currentIndex > 0) {
		currentIndex--;
	} else {
		currentIndex = totalImages - 1;
	}
	updateSliderPosition();
});

document.querySelector(".btn-right").addEventListener("click", () => {
	if (currentIndex < totalImages - 1) {
		currentIndex++;
	} else {
		currentIndex = 0;
	}
	updateSliderPosition();
});
