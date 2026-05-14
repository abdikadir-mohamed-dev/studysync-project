import React from 'react'
import { Pencil, Trash } from 'lucide-react'

function ToDoList({ tasks, setTasks }) {

    function handleDelete(id) {
        const updatedTasks = tasks.filter(task => task.id !== id)
        setTasks(updatedTasks)
    }

    function handleEdit(id) {
        const updatedTask = prompt("Edit your task")
        if (updatedTask) {
            const editedTasks = tasks.map(task =>
                task.id === id
                ? { ...task, task: updatedTask }
                : task
            )
            setTasks(editedTasks)
        }
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
                    {(tasks || []).map((task) => (
                        <tr key={task.id}>
                            <td className='border-b p-4'>{task.task}</td>
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