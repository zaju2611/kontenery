function openModal(imgSrc) {
	const modal = document.getElementById("modal");
	const modalImg = document.getElementById("modal-img");
	modal.style.display = "flex";
	modalImg.src = imgSrc;
}

function closeModal() {
	const modal = document.getElementById("modal");
	modal.style.display = "none";
}

let currentImageIndex = 0;
let currentSection = null;
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

function showImage(index) {
	const images = currentSection.querySelectorAll("img");
	modalImg.style.opacity = 0;

	setTimeout(() => {
		modalImg.src = images[index].src;
		modalImg.style.opacity = 1;
		currentImageIndex = index;
	}, 500);
}

document.querySelectorAll("section").forEach((section) => {
	const images = section.querySelectorAll(".grid-wrapper img");

	images.forEach((img, index) => {
		img.addEventListener("click", () => {
			openModal(img.src);
			currentSection = section;
			currentImageIndex = index;
		});
	});
});

document.getElementById("close-btn").addEventListener("click", closeModal);

document.getElementById("prev-btn").addEventListener("click", () => {
	if (currentImageIndex > 0) {
		showImage(currentImageIndex - 1);
	} else {
		showImage(currentSection.querySelectorAll("img").length - 1);
	}
});

document.getElementById("next-btn").addEventListener("click", () => {
	if (currentImageIndex < currentSection.querySelectorAll("img").length - 1) {
		showImage(currentImageIndex + 1);
	} else {
		showImage(0);
	}
});

document.getElementById("modal").addEventListener("click", (e) => {
	if (e.target === modal) {
		closeModal();
	}
});
