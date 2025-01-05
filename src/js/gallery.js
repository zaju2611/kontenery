const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
let currentImageIndex = 0;
let currentGallery = null;

function openModal(gallery, index) {
	currentGallery = gallery;
	showImage(index);
	modal.style.display = "flex";
}

function closeModal() {
	modal.style.display = "none";
	currentGallery = null;
}

function showImage(index) {
	const images = currentGallery.querySelectorAll("img");
	modalImg.style.opacity = 0;

	setTimeout(() => {
		modalImg.src = images[index].src;
		modalImg.style.opacity = 1;
		currentImageIndex = index;
	}, 500);
}

document.querySelectorAll(".realization").forEach((realization) => {
	const mainImg = realization.querySelector(".main-img");
	const gallery = realization.querySelector(".gallery");

	mainImg.addEventListener("click", () => {
		openModal(gallery, 0);
	});
});

document.getElementById("close-btn").addEventListener("click", closeModal);

document.getElementById("prev-btn").addEventListener("click", () => {
	if (currentImageIndex > 0) {
		showImage(currentImageIndex - 1);
	} else {
		showImage(currentGallery.querySelectorAll("img").length - 1);
	}
});

document.getElementById("next-btn").addEventListener("click", () => {
	if (currentImageIndex < currentGallery.querySelectorAll("img").length - 1) {
		showImage(currentImageIndex + 1);
	} else {
		showImage(0);
	}
});

modal.addEventListener("click", (e) => {
	if (e.target === modal) {
		closeModal();
	}
});
