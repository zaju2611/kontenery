const sliderBox = document.querySelector(".slider-box");
const images = document.querySelectorAll(".slider-img");
const leftButton = document.querySelector(".btn-left");
const rightButton = document.querySelector(".btn-right");

let currentIndex = 0;
const totalImages = images.length;

// Function to move slider to the right
function moveToRight() {
	if (currentIndex < totalImages - 1) {
		currentIndex++;
	} else {
		currentIndex = 0; // Loop back to the first image
	}
	updateSliderPosition();
}

// Function to move slider to the left
function moveToLeft() {
	if (currentIndex > 0) {
		currentIndex--;
	} else {
		currentIndex = totalImages - 1; // Loop back to the last image
	}
	updateSliderPosition();
}

// Function to update slider position
function updateSliderPosition() {
	const offset = -currentIndex * 100; // Each image takes up 100% width
	sliderBox.style.transform = `translateX(${offset}%)`;
}

// Event listeners for buttons
leftButton.addEventListener("click", moveToLeft);
rightButton.addEventListener("click", moveToRight);
