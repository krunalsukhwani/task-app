import React from "react";
import "./NewTask.css";

const NewTask = props => {

  //arrow function to add task
  const addTaskHandler = event => {
    event.preventDefault();
    const newTask = {
      id: Math.random().toString(),
      text: 'My New Task : Create Task Application'
    };

    // console.log(newTask);
    props.onAddTask(newTask);
  };


  return (
    <form className="new-task" onSubmit={addTaskHandler}>
      <input type="text" />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTask;
