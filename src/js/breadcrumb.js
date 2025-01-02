function capitalizeFirstLetter(str) {
	return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

function generateBreadcrumb() {
	const breadcrumbElement = document.getElementById("breadcrumb");
	const path = window.location.pathname;
	const pathParts = path.split("/").filter((part) => part.length > 0);

	const homeSpan = document.createElement("span");
	homeSpan.textContent = "Strona Główna";
	breadcrumbElement.appendChild(homeSpan);

	breadcrumbElement.appendChild(document.createTextNode(" "));

	let url = "/";
	pathParts.forEach((part, index) => {
		url += part + "/";

		part = part.replace(/\.html$/, "");

		const partSpan = document.createElement("span");
		partSpan.textContent = capitalizeFirstLetter(
			decodeURIComponent(part.replace(/-/g, " "))
		);
		breadcrumbElement.appendChild(partSpan);

		if (index < pathParts.length - 1) {
			breadcrumbElement.appendChild(document.createTextNode(" "));
		}
	});
}

window.onload = generateBreadcrumb;
