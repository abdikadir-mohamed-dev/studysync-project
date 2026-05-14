const BASE_URL = "http://localhost:3001/tasks";

// GET: Fetch all tasks
export const getTasks = () => 
    fetch(BASE_URL).then(res => res.json());

// POST: Save a new task
export const addTask = (newTask) => fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask)
}).then(res => res.json());

// DELETE: Remove a task
export const deleteTask = (id) => 
    fetch(`${BASE_URL}/${id}`, { method: "DELETE" });

// PATCH: Update task status or details
export const updateTask = (id, updatedData) => fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData)
}).then(res => res.json());