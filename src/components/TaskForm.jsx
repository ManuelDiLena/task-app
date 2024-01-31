import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/TaskForm.css';

function TaskForm(props) {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleShipping = e => {
    e.preventDefault()

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }

    props.onSubmit(newTask)
  }

  return (
    <form className='task-form' onSubmit={handleShipping}>
      <input 
        type="text"
        className='task-input'
        placeholder='New Task'
        name='text'
        onChange={handleChange} 
      />
      <button className='task-button'>Add Task</button>
    </form>
  )
}

export default TaskForm;