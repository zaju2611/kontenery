const sliderBox = document.querySelector(".slider-box");
const sliderImages = document.querySelectorAll(".slider-img");
const leftButton = document.querySelector(".btn-left");
const rightButton = document.querySelector(".btn-right");

let currentIndex = 0;
const totalImages = sliderImages.length;

function moveToRight() {
	if (currentIndex < totalImages - 1) {
		currentIndex++;
	} else {
		currentIndex = 0;
	}
	updateSliderPosition();
}

function moveToLeft() {
	if (currentIndex > 0) {
		currentIndex--;
	} else {
		currentIndex = totalImages - 1;
	}
	updateSliderPosition();
}

function updateSliderPosition() {
	const offset = -currentIndex * 100;
	sliderBox.style.transform = `translateX(${offset}%)`;
}

leftButton.addEventListener("click", moveToLeft);
rightButton.addEventListener("click", moveToRight);
