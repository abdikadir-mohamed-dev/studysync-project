import React from 'react'
import { useState } from 'react'
import ToDoList from './ToDoList'
import { addTask } from '../api';

function ToDoForm({tasks}) {
const[task,setTask]=useState({
  taskNumber:'',
  taskName:'',
  status:'pending',
  dueDate:'',
  priority:'low',
  comments:''  
})
    const[storeTask,setStoreTask]=useState([])

function handleSubmit(e) {
    e.preventDefault();

    // 1. Send the data to your "Engine Room" (the JSON server)
    addTask(task).then((savedTask) => {
        alert("Task saved to database!");
        setStoreTask([...storeTask, savedTask]);

        // 2. Clear the form ONLY after the save is successful
        setTask({
            taskNumber: '',
            taskTitle: '',
            status: '',
            deadlineDate: '',
            deadlineTime: '',
            priority: 'low', // You can set a default priority if you want
            comments: ''
        });
    }).catch(err => console.error("Database error:", err));
}
            console.log(storeTask)

  return (
        <>
        <div className='border-violet-800 bg-gray-300 max-w-2xl my-0 mx-auto p-10 rounded-md'>
                <h1>Task Form</h1>

        <form className='flex flex-col gap-1 ' onSubmit={handleSubmit}>
            <label htmlFor="taskNumber">Task Number:</label>
            <input className="border outline-violet-800 rounded-md p-2 w-full" type="number" value={task.taskNumber} id='taskNumber'onChange={(e)=>setTask({...task,taskNumber:e.target.value})}required/>

            <label htmlFor="task">Task</label>
            <input className="border outline-violet-800 rounded-md p-2 w-full" type="text" value={task.taskName} id='task'onChange={(e)=>setTask({...task,taskName:e.target.value})}required/>
            <label htmlFor="status">Status</label>
            <input className="border outline-violet-800 rounded-md p-2 w-full" 
 type="text" value={task.status} id='status'onChange={(e)=>setTask({...task,status:e.target.value})}required/>
            <label htmlFor="deadlineDate">Deadline Date:</label>
            <input className='border outline-violet-800 rounded-md p-2 w-full ' id='deadlineDate' type='date' onChange={(e)=>setTask({...task,deadlineDate:e.target.value})}required/>
            <label htmlFor="deadlineTime">Deadline Time:</label>
            <input className='border outline-violet-800 rounded-md p-2 w-full ' id='deadlineTime' type='time' onChange={(e)=>setTask({...task,deadlineTime:e.target.value})}required/>
            <label htmlFor="priority">Priority:</label>
            <select className='border outline-violet-800 rounded-md p-2 w-full ' id='priority' value={task.priority} onChange={(e)=>setTask({...task,priority:e.target.value})}required>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button className=" border bg-violet-800 rounded-md text-white cursor-pointer m-auto p-3" type='submit'>Add Task</button>
        </form>
      
    </div>
    <ToDoList tasks={tasks}/>

      </>
    
  )
}

export default ToDoForm
