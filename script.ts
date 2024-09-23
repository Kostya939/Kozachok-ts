// Типізація змінних
const openModalButton: HTMLButtonElement = document.getElementById('openModal') as HTMLButtonElement;
const closeModalButton: HTMLSpanElement = document.getElementById('closeModal') as HTMLSpanElement;
const modal: HTMLElement = document.getElementById('myModal') as HTMLElement;

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
    } else {
      document.body.style.backgroundColor = 'white';
    }
  });
  async function fetchPosts(): Promise<void> {
    try {
      const response: Response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts: { title: string; body: string }[] = await response.json();
  
      const postsContainer: HTMLElement = document.getElementById('postsContainer') as HTMLElement;
  
      posts.forEach((post) => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        postsContainer.appendChild(postElement);
      });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  
  // Виклик функції після завантаження сторінки
  document.addEventListener('DOMContentLoaded', fetchPosts);
  