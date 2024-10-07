# University Schedule Management System

This project is an implementation of a University Schedule Management System using JavaScript and TypeScript. The system allows users to manage and organize university schedules by adding, modifying, and canceling lessons, as well as analyzing classroom utilization and detecting schedule conflicts.

## Key Features:
- Add, update, and cancel lessons for different professors and courses.
- Search for available classrooms based on the day of the week and time slots.
- Check for scheduling conflicts to ensure no overlapping lessons.
- Analyze classroom utilization rates.
- Generate reports on the most popular course types.

## Technologies:
- **TypeScript**: Used for strong typing and error checking.
- **JavaScript**: Used for dynamic functionality and DOM manipulation.

## Files:
- `university-schedule.ts`: Contains the core logic written in TypeScript.
- `tsconfig.json`: TypeScript configuration file.

## Getting Started

To set up and run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone <your-repository-url>
    ```
   
2. Install TypeScript globally, if not already installed:
    ```bash
    npm install -g typescript
    ```

3. Compile the TypeScript file:
    ```bash
    tsc university-schedule.ts
    ```

4. Run the JavaScript output (if using Node.js):
    ```bash
    node university-schedule.js
    ```

## How to Use

- **Adding a Professor**: You can add a new professor using the `addProfessor` function.
- **Adding a Lesson**: Use the `addLesson` function to add lessons and check for scheduling conflicts.
- **Search Available Classrooms**: Use the `findAvailableClassrooms` function to search for open classrooms during a specific time slot.
- **Check Professor's Schedule**: The `getProfessorSchedule` function allows you to retrieve the schedule of a specific professor.
- **Cancel a Lesson**: You can remove a lesson using the `cancelLesson` function.

## License

This project is licensed under the MIT License.
