/* eslint-disable no-unused-vars */
import { useState, useContext, useEffect } from "react";
import { CentralizedData } from "./components/Provider/Contect";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import EditModal from "./components/Modal/EditModal";
import toast from "react-hot-toast";

const LOCAL_STORAGE_KEY = "todo_app_using_vite_and_react";

function App() {
  const {
    tasks,
    setTasks,
    setModal,
    setTaskIdToUpdate,
    setTaskContentToUpdate,
  } = useContext(CentralizedData);

  const wait = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const loadSavedTasks = () => {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  };

  const setTaskAndSave = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };

  useEffect(() => {
    loadSavedTasks();
  }, []);

  const addNewTask = (taskContent) => {
    setTaskAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        content: taskContent,
        isCompleted: false,
      },
    ]);
  };

  const updateTaskById = (taskId, taskContent) => {
    setModal(true);
    setTaskIdToUpdate(taskId);
    setTaskContentToUpdate(taskContent);
  };

  const deleteTaskById = async (taskId, taskStatus) => {
    if (taskStatus) {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
      await wait(250);
      toast.success("Task Deleted");
    }
  };

  const setTasksAsCompleted = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTaskAndSave(newTasks);
  };

  return (
    <main className="w-full min-h-screen bg-[#191919]">
      <EditModal tasks={tasks} />
      <Header handleAddTask={addNewTask} />
      <Tasks
        tasks={tasks}
        deleteHandler={deleteTaskById}
        updateTaskById={updateTaskById}
        onComplete={setTasksAsCompleted}
      />
    </main>
  );
}

export default App;
