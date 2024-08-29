import React, {useState} from 'react'
import './background.css'
import Input from '../Input bar/Input';
import Tasks from '../Tasks List/Task';
function background() {
const [tasks, setTasks] = useState([]);

  return (
    <>
      <div className='head'>
         <h1>T O D O</h1>
         <Input setTasks={setTasks}/>
      </div>
      <Tasks tasks ={tasks} setTasks={setTasks}/>
    </>
  )
}

export default background
