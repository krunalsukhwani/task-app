import React from "react";
import "./NewTask.css";

const NewTask = () => {
  return (
    <form className="new-task">
      <input type="text" />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTask;
