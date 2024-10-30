

// Функція для отримання даних з API
export async function fetchData(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
        // Тут можна додати код для відображення даних на сторінці
    } catch (error) {
        console.error("Error fetching data", error);
    }
}
