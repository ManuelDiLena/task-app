import './App.css'
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='task-app'>
      <div className='task-app-list'>
        <h1>Tasks</h1>
        <TaskList />
      </div>
    </div>
  )
}

export default App
