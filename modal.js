function openModal(imgSrc) {
	const modal = document.getElementById("modal");
	const modalImg = document.getElementById("modal-img");
	modal.style.display = "flex";
	modalImg.src = imgSrc;
}

// Funkcja do zamykania modalu
function closeModal() {
	const modal = document.getElementById("modal");
	modal.style.display = "none";
}

// Funkcja do przewijania zdjęć
let currentImageIndex = 0;
const images = document.querySelectorAll(".grid-wrapper img");

function showImage(index) {
	const modalImg = document.getElementById("modal-img");
	modalImg.src = images[index].src;
	currentImageIndex = index;
}

// Obsługuje kliknięcia na zdjęcia
document.querySelectorAll(".grid-wrapper img").forEach((img, index) => {
	img.addEventListener("click", () => {
		openModal(img.src);
		currentImageIndex = index; // Ustawienie bieżącego indeksu
	});
});

// Obsługuje kliknięcie w przycisk zamykania
document.getElementById("close-btn").addEventListener("click", closeModal);

// Obsługuje kliknięcie w przyciski nawigacyjne
document.getElementById("prev-btn").addEventListener("click", () => {
	if (currentImageIndex > 0) {
		showImage(currentImageIndex - 1);
	} else {
		showImage(images.length - 1);
	}
});

document.getElementById("next-btn").addEventListener("click", () => {
	if (currentImageIndex < images.length - 1) {
		showImage(currentImageIndex + 1);
	} else {
		showImage(0);
	}
});

// Zamykanie modalu po kliknięciu poza obrazem
document.getElementById("modal").addEventListener("click", (e) => {
	if (e.target === document.getElementById("modal")) {
		closeModal();
	}
});
