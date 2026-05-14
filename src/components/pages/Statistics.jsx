import { useEffect, useState } from "react";

function Statistics({ tasks }) {

  
  const totalTasks = tasks.length;

  const CompletedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;
    const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;
  
  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  const progress =
    totalTasks > 0
      ? Math.round((CompletedTasks / totalTasks) * 100)
      : 0;

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-8">
        Statistics
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2>Total Tasks</h2>
          <p className="text-4xl font-bold mt-3">
            {totalTasks}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2>Completed</h2>
          <p className="text-4xl font-bold text-green-500 mt-3">
            {CompletedTasks}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2>Pending</h2>
          <p className="text-4xl font-bold text-orange-500 mt-3">
            {pendingTasks}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2>High Priority</h2>
          <p className="text-4xl font-bold text-red-500 mt-3">
            {highPriorityTasks}
          </p>
        </div>

      </div>

      <div className="bg-white p-6 rounded-2xl shadow mt-8">

        <h2 className="text-xl font-bold mb-4">
          Study Progress
        </h2>

        <div className="w-full bg-gray-200 rounded-full h-5">

          <div
            className="bg-purple-500 h-5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>

        </div>

        <p className="mt-3 font-semibold">
          {progress}% Completed
        </p>

      </div>

    </div>
  );
}

export default Statistics;