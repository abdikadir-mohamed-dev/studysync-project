import { useState, useEffect } from 'react';
import { getTasks, deleteTask } from './api';
// 1. IMPORT the ToDoList component (adjust path if needed)
import ToDoList from '../components/ToDoList'; 

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        getTasks().then(data => setTasks(data));
    }, []);

    const filteredTasks = tasks.filter(task => 
        // Ensure this matches your db.json key (taskTitle)
        task.taskTitle?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = (id) => {
        deleteTask(id).then(() => {
            setTasks(tasks.filter(t => t.id !== id));
        });
    };

    return (
        <div className="tasks-container p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-4 text-center">My Tasks</h1>
                
                {/* Search Bar */}
                <div className="flex justify-center mb-6">
                    <input 
                        type="text" 
                        className="p-2 border border-violet-800 rounded-md w-full max-w-md"
                        placeholder="Search tasks..." 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                </div>

                {/* 
                  2. RENDER the ToDoList component and pass the filtered tasks.
                  Make sure the prop name 'tasks' matches what we wrote in ToDoList.jsx
                */}
                <ToDoList tasks={tasks} onDelete={handleDelete} />
            </div>
        </div>
    );
};



export default Tasks;