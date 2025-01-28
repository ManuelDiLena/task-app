import '../styles/Task.css';
import { IoIosCloseCircleOutline } from 'react-icons/io';

function Task({ id, text, completed, completeTask, deleteTask }) {
  return (
    <div className={completed ? 'task-container completed' : 'task-container'}>
      <div
        className='task-text'
        onClick={() => completeTask(id)}
      >
        {text}
      </div>
      <div
        className='task-container-icos'
        onClick={() => deleteTask(id)}
      >
        <IoIosCloseCircleOutline className='task-icon' />
      </div>
    </div>
  )
}

export default Task;