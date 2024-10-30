// src/modules/modal.ts

// Типізація для елементів модального вікна
const modal = document.getElementById("modal") as HTMLElement;
const openModalButton = document.getElementById("openModal") as HTMLButtonElement;
const closeModalButton = document.getElementById("closeModal") as HTMLButtonElement;

// Функція для відкриття модального вікна
export function openModal() {
    modal.style.display = "block";
}

// Функція для закриття модального вікна
export function closeModal() {
    modal.style.display = "none";
}

// Додаємо слухачі подій для відкриття та закриття модального вікна
openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
