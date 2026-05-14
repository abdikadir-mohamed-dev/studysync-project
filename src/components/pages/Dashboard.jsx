import { useState } from 'react';
import Search from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import woman from "../../assets/woman.webp"
// import Name from './Name';

function Dashboard({ tasks, setTasks }) {
  
  // CALCULATIONS 
  const totalTasks = tasks.length;
  const completedCount = tasks.filter(
  t => t.status === "Completed"
).length;
  const pendingCount = totalTasks - completedCount;
  
  // Calculate percentage for the chart
  const percentageCompleted =
  totalTasks > 0
    ? Math.round((completedCount / totalTasks) * 100)
    : 0;
  // const percentagePending = Math.round((pendingCount/totalTasks)*100);
const toggleTask = (id) => {
  const updatedTasks = tasks.map(task =>
    task.id === id
      ? {
          ...task,
          status:
            task.status === "Completed"
              ? "Pending"
              : "Completed"
        }
      : task
  );

  setTasks(updatedTasks);
};
  

  return ( <div className="flex min-h-screen bg-[#F8F9FE]">
      

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between">
          <h1 className='text-3xl mb-6 text-black-600'>Dashboard</h1>
          <Search/>
          <FontAwesomeIcon icon={faBell} size='lg' />
        </div>
        <div className="mb-8">
       <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 h-30 w-full flex justify-between items-center">
            <h2 className='text-2xl mb-3 mt-3 '>Hello!👋</h2>
            <p>Stay organized and start working on you study goals</p>
            <img src={woman}alt="student" className="w-32 h-32" />

          </div>

        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-blue-500">
            <p className="text-gray-400 text-sm"> 
              <img src="/src/assets/todo.png" alt="Total" className='w-9 h-8' />Total</p>
            <p className="text-3xl font-bold">{totalTasks}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-green-500 ">
            <p className="text-gray-400 text-sm ">
              <img src="/src/assets/check.png" alt="Complete" className='w-9 h-9' /> Completed</p>
            <p className="text-3xl font-bold text-green-600">{completedCount}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-yellow-500">
            <p className="text-gray-400 text-sm">
              <img src="/src/assets/spinner-of-dots.png" alt="" className='w-9 h-9'/>Pending</p>
            <p className="text-3xl font-bold text-yellow-600">{pendingCount}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-purple-500">
            <p className="text-gray-400 text-sm">Progress</p>
            <p className="text-3xl font-bold">{percentageCompleted}%</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* TASK LIST */}
          {/* TASK LIST */}
<div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm">
  <h3 className="font-bold text-xl mb-6">Your Study Tasks</h3>

  <div className="space-y-4">
    {tasks.map(task => (
      <div
        key={task.id}
        className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl border border-gray-100"
      >
        <div>
          <p
            className={`font-bold ${
              task.status === "Completed"
                ? "line-through text-black"
                : ""
            }`}
          >
            {task.task}
          </p>

          <p className="text-xs text-blue-500 uppercase tracking-widest">
            {task.deadlineDate}
          </p>
        </div>

        <button
          onClick={() => toggleTask(task.id)}
          className={`px-4 py-2 rounded-full text-xs font-bold transition ${
            task.status === "Completed"
              ? "bg-green-100 text-green-700"
              : "bg-[#2D2B7E] text-white"
          }`}
        >
          {task.status === "Completed" ? "Done" : "Complete"}
        </button>
      </div>
    ))}
  </div>
</div>
          {/*CHART CARD */}
          <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col items-center justify-center text-center">
            <h3 className="font-bold text-lg mb-8 self-start">Study Progress</h3>
            
            {/* Circle Chart */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                {/* Gray Background Circle */}
                <circle cx="96" cy="96" r="80" stroke="#F3F4F6" strokeWidth="16" fill="transparent" />
                {/* Green Progress Circle */}
                <circle 
                  cx="96" cy="96" r="80" stroke="#10B981" strokeWidth="16" fill="transparent" 
                  strokeDasharray="502" 
                  strokeDashoffset={502 - (502 * percentageCompleted) / 100} 
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute">
                <p className="text-4xl font-black text-gray-800">{percentageCompleted}%</p>
                <p className="text-xs text-gray-400 font-bold uppercase">Complete</p>
              </div>
            </div>

            <p className="mt-8 text-gray-500 text-sm px-4">
              You have completed <b>{completedCount}</b> out of <b>{totalTasks}</b> study goals!
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;