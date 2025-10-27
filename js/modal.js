document.querySelectorAll(".open-modal").forEach((button) => {
	button.addEventListener("click", () => {
		const modalId = button.dataset.modal;
		document.getElementById(modalId).classList.add("active");
	});
});

document.querySelectorAll(".modal .close").forEach((closeBtn) => {
	closeBtn.addEventListener("click", () => {
		closeBtn.closest(".modal").classList.remove("active");
	});
});

document.querySelectorAll(".modal").forEach((modal) => {
	modal.addEventListener("click", (e) => {
		if (e.target === modal) {
			modal.classList.remove("active");
		}
	});
});
