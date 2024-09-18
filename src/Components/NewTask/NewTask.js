import React, {useState} from "react";
import "./NewTask.css";

const NewTask = props => {

  const [enteredText, setEnteredText] = useState('');

  //arrow function to add task
  const addTaskHandler = event => {
    event.preventDefault();
    const newTask = {
      id: Math.random().toString(),
      text: enteredText
    };

    setEnteredText('');
    props.onAddTask(newTask);
  };

  const textChangeHandler = event => {
    setEnteredText(event.target.value);
  };


  return (
    <form className="new-task" onSubmit={addTaskHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler}/>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTask;
