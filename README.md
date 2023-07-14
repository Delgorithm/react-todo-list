# Todo List

This is a Todo List application developed using React. It allows you to manage a list of tasks by adding, marking as completed, and deleting items from the list.

## Installation

1. Clone this repository to your local machine:

```git
git clone https://github.com/your-username/todo-list.git
```

2. Navigate to the project directory

```git
cd todo-list
```

3. Install it

```git
npm install
```

4. Start the application in development mode

```git
npm start
```

The application will be accessible at http://localhost:3000 in your browser.

## Features

- Add a new task by entering the text in the input field and clicking the "Add" button.
- Mark a task as completed by clicking the checkbox next to the task.
- Delete a task from the list by clicking the delete button next to the task.
- The list of tasks is locally saved in the browser, which means your tasks will be retained even if you refresh the page.

## Project Structure

- **src/App.js**: Root component of the application that manages the global state and renders the other components.

- **src/components/TodoForm.js**: Component for the form to add new tasks.

- **src/components/TodoItem.js**: Component representing an individual task in the list.

- **src/components/TodoList.js**: Component that displays the list of tasks and handles marking and deletion actions.

- **src/index.css**: Style file for the application.
