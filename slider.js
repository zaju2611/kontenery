let currentIndex = 0; // Indeks bieżącego obrazu
const sliderBox = document.querySelector(".slider-box"); // Kontener dla obrazków
const images = document.querySelectorAll(".slider-img"); // Wszystkie obrazki w sliderze
const totalImages = images.length; // Łączna liczba obrazów

// Funkcja do aktualizacji pozycji slidera
function updateSliderPosition() {
	const offset = -currentIndex * 100; // Przesunięcie o 100% dla każdego obrazu
	sliderBox.style.transform = `translateX(${offset}%)`; // Ustawienie przemieszczenia
}

// Funkcja do przechodzenia do poprzedniego obrazu
document.querySelector(".btn-left").addEventListener("click", () => {
	if (currentIndex > 0) {
		currentIndex--;
	} else {
		currentIndex = totalImages - 1; // Jeśli na początku, przejdź na ostatni obraz
	}
	updateSliderPosition();
});

// Funkcja do przechodzenia do następnego obrazu
document.querySelector(".btn-right").addEventListener("click", () => {
	if (currentIndex < totalImages - 1) {
		currentIndex++;
	} else {
		currentIndex = 0; // Jeśli na końcu, przejdź na pierwszy obraz
	}
	updateSliderPosition();
});
