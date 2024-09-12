import logo from "./logo.svg";
import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="course-tasks">
      <h2>Task List</h2>
      <ul className="task-list">
        <li>Attend COMP 229 Class</li>
        <li>Complete Assignment</li>
        <li>Play Video Game</li>
      </ul>
    </div>
  );
};

export default App;
