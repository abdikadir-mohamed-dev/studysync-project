import { addTask } from '../../api';
import { useState } from 'react';

const AddTask = () => {
    const [taskData, setTaskData] = useState({
        taskTitle: "",
        subject: "",
        deadlineDate: "",
        deadlineTime: "",
        priority: "Medium",
        status: "Pending"
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(taskData).then(() => {
            alert("Task Successfully Added to the Database!");
        });
    };

    return (
        <form onSubmit={handleSubmit}>
        
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTask;