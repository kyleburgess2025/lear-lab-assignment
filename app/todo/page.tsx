"use client";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Task = {
  id: string;
  name: string;
  dueDate: string;
};

export default function ToDo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    console.log(tasks);
    setTasks(tasks);
  }, []);

  useEffect(() => {
    if (tasks.length !== 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">To Do</h1>
      <div className="flex flex-col items-center justify-center">
        <input
          type="text"
          className="p-3 border border-gray-300 rounded-lg w-96"
          placeholder="Add a new task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <DatePicker
          onChange={(date: Date) => setDueDate(date.toDateString())}
          placeholderText="Choose Due Date"
          selected={dueDate}
          className="p-3 border border-gray-300 rounded-lg w-96 mt-4"
        />
        <button
          className="mt-4 p-3 bg-blue-500 text-white rounded-lg w-96"
          disabled={taskName === "" || dueDate === ""}
          onClick={() =>
            setTasks([
              ...tasks,
              {
                id: Math.random().toString(36).substring(7),
                name: taskName,
                dueDate: dueDate,
              },
            ])
          }
        >
          {taskName === "" || dueDate === "" ? "Complete the above fields to add task" : "Add Task"}
        </button>
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        {tasks.map((task) => {
          return (
            <div
              key={task.id}
              className="flex items-center justify-between w-96 p-3 border border-gray-300 rounded-lg"
            >
              <p>{task.name}</p>
              <p>{task.dueDate}</p>
              <button
                className="text-red-500"
                onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}
