"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Типізація змінних
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');
const modal = document.getElementById('myModal');
// Обробник події для відкриття модального вікна
openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
});
// Обробник події для закриття модального вікна
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});
// Закриття модального вікна при натисканні за межами вікна
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Типізація змінної
    console.log(`Scroll Position: ${scrollPosition}`);
    // Додай клас для зміни стилю при прокручуванні сторінки
    if (scrollPosition > 100) {
        document.body.style.backgroundColor = 'lightblue';
    }
    else {
        document.body.style.backgroundColor = 'white';
    }
});
function fetchPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = yield response.json();
            const postsContainer = document.getElementById('postsContainer');
            posts.forEach((post) => {
                const postElement = document.createElement('div');
                postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
                postsContainer.appendChild(postElement);
            });
        }
        catch (error) {
            console.error('Error fetching posts:', error);
        }
    });
}
// Виклик функції після завантаження сторінки
document.addEventListener('DOMContentLoaded', fetchPosts);
