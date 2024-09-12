import logo from "./logo.svg";
import React from "react";
import "./App.css";
import TaskList from "./Components/TaskList/TaskList";

const App = () => {
  return (
    <div className="course-tasks">
      <h2>Task List</h2>
      <TaskList />
    </div>
  );
};

export default App;
