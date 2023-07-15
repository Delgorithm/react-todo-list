import React, { useState } from 'react';

function TodoForm() {
  // State variable to stock the input's value
  const [inputValue, setInputValue] = useState('');
  
  // State variable to stock our tasks
  const [tasks, setTasks] = useState([]);
  
  // State variable for an error
  const [inputError, setInputError] = useState(null);

  // Function to update input's value at each modification
  function handleTaskChange(event) {
    const value = event.target.value;
    setInputValue(value);

    if (value.length < 1) {
      setInputError('Input cannot be blank');
    } else {
      setInputError(null);
    }
  }

  // Function to add the task in the ToDo's list
  function handleSubmit(event) {
    event.preventDefault();

    if (inputValue.length < 1) {
      setInputError('Input cannot be blank');
      return;
    }

    // Add the input's value at the ToDo's list
    setTasks([...tasks, inputValue]);
    // Reset the input's value
    setInputValue('');
  }

  function handleDelete(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <>
      <form className="formSubmit"onSubmit={handleSubmit}>
        <label>
          My ToDo's :
          <input className="inputSubmit"type='text' value={inputValue} onChange={handleTaskChange} />
        </label>
        <button className="buttonSubmit"type='submit'>Add</button>
      </form>
      <div>
        {tasks.map((task, index) => (
          <div className='inputTodo' key={index}>
            <p className="inputDisplay">{task}</p>
            <button className="buttonDelete"onClick={() => handleDelete(index)}>X</button>
          </div>
        ))}
      </div>
    </>

  );
}

export default TodoForm;