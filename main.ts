
import { openModal, closeModal } from "./modules/modal";
import { fetchData } from "./modules/api";
import { setupUI } from "./modules/ui";

// Виклик функцій для налаштування інтерфейсу
setupUI();

// Завантаження даних
fetchData();
