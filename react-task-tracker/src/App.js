import logo from './logo.svg';
import './App.css';

import { useState } from "react"

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


function App() {


  const [toggleAddTask, setToggleAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Learn JS',
        day: 'Feb 5th',
        reminder: true,
    },
    {
        id: 2,
        text: 'Learn React',
        day: 'Feb 10th',
        reminder: true,
    },
    
    {
        id: 3,
        text: 'Learn Redux',
        day: 'Feb 15th',
        reminder: false,
    },
    
]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  const toggleReminder = (id) => {
    // task[id].reminder = !
    // console.log(id);
    setTasks(tasks.map((task) => 
      task.id === id ? 
        { ...task, reminder: !task.reminder}
      : task
    ));

  }


  const addTask = (task) => {
    // console.log(task);
    const id = Math.floor(Math.random() * 10000 ) + 1
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }

  const toggleAdd = () => {
    setToggleAddTask(!toggleAddTask);
  }



  return (
    <div className="container">
      <Header onToggleAdd={toggleAdd} showAdd={toggleAddTask}/>
      {toggleAddTask && <AddTask onAdd={addTask} onToggleAdd={toggleAdd}/> }
      { tasks.length > 0 ?
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        : 
          'No tasks to display'
      }
      
    </div>
  );
}

export default App;
