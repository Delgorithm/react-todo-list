import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoForm from './components/TodoForm.js'
import TodoItem from './components/TodoItem.js'
import TodoList from './components/TodoList.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <TodoForm />
    <TodoItem />
    <TodoList />
  </React.StrictMode>,
)
