import React, { useState } from "react";
import "./App.css";
import TaskList from "./Components/TaskList/TaskList";
import NewTask from "./Components/NewTask/NewTask";

const App = () => {

  //courseTasks: old data
  //setCourseTasks: new data
  const [courseTasks, setCourseTasks] = useState(
    [
      {id:"task1", text: "Attend Course COMP229"},
      {id:"task2", text: "Complete the assignment"},
      {id:"task3", text: "Play Video Game"},
      {id:"task4", text: "Create React Project"},
    ]);

  //handler to receive task from NewTask
  const addNewTaskHandler = (newTask) => {
    setCourseTasks((prevCourseTasks) => {
      return prevCourseTasks.concat(newTask);
    });
  };

  return (
    <div className="course-tasks">
      <h2>Task List</h2>
      <NewTask onAddTask={addNewTaskHandler}/>

      {/* transferring data from App component to TaskList componet using props (tasks) */}
      <TaskList tasks={courseTasks}/>
    </div>
  );
};

export default App;
