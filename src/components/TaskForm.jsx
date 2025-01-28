import { useState } from "react";
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
    props.addTask(newTask)
    setInput('')
  }

  return (
    <form className='task-form' onSubmit={handleShipping}>
      <input 
        className='task-input'
        name='text'
        onChange={handleChange}
        placeholder='New Task'
        type='text'
        value={input}
      />
      <button className='task-btn'>Add Task</button>
    </form>
  )
}

export default TaskForm;