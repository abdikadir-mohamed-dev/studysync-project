import React from 'react'
import { Pencil, Trash } from 'lucide-react'

// 1. Fixed prop name to match the 'tasks' variable you are passing from Tasks.jsx
function ToDoList({ tasks }) { 

    function handleDelete(id) {
        // You should pass task.id here later to call your API delete function
        console.log('Deleting task with ID:', id)
    }

    function handleEdit(id) {
        console.log('Editing task with ID:', id)
    }

    const isOverdue = (dueDateString) => {
        if (!dueDateString) return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const targetDate = new Date(dueDateString);
        targetDate.setHours(0, 0, 0, 0);
        return targetDate < today;
    };

    return (
        <div className='border-violet-800 bg-gray-300 max-w-4xl my-10 mx-auto p-5 rounded-md shadow-lg'>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className='text-left border-b p-4 font-bold'>Task</th>
                        <th className='text-left border-b p-4 font-bold'>Status</th>
                        <th className='text-left border-b p-4 font-bold'>Due Date</th>
                        <th className='text-left border-b p-4 font-bold'>Priority</th>
                        <th className='text-left border-b p-4 font-bold'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 2. Changed taskList to tasks and updated keys to match db.json */}
                    {(tasks || []).map((task) => (
                        <tr key={task.id}>
                            {/* 3. Use taskTitle instead of taskName to match your JSON file */}
                            <td className='border-b p-4'>{task.taskTitle}</td>
                            <td className='border-b p-4'>
                                <span className="capitalize">{task.status}</span>
                            </td>
                            <td className={`border-b p-4 ${isOverdue(task.deadlineDate) ? 'text-red-600 font-bold' : 'text-black'}`}>
                                {task.deadlineDate}
                            </td>
                            <td className='border-b p-4'>{task.priority}</td>
                            <td className='border-b p-4'>
                                <div className='flex gap-2'>
                                    <button 
                                        type='button' 
                                        className='p-2 hover:bg-gray-400 rounded-full transition-colors'
                                        onClick={() => handleEdit(task.id)}
                                    >
                                        <Pencil size={20}/>
                                    </button>
                                    <button 
                                        type='button' 
                                        className='p-2 hover:bg-red-200 text-red-600 rounded-full transition-colors'
                                        onClick={() => handleDelete(task.id)}
                                    >
                                        <Trash size={20}/>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ToDoList