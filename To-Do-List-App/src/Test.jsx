import { useState } from "react";

export default function Test() {
  const [task, setnewTask] = useState([
    "Walk The Dog",
    "Do Your Work",
    "Take A Shower",
  ]);
  const [addtask, setaddTask] = useState("");

  function AddFunction() {
    if (addtask !== "") {
      setnewTask((t) => [...t, addtask]);
      setaddTask("");
    }
  }

  function DeleteFunction(index) {
    const updatedTasks = task.filter((_, i) => i !== index);
    setnewTask(updatedTasks);
  }

  function MoveUpFunction(index) {
    if (index > 0) {
      let updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setnewTask(updatedTasks);
    }
  }

  function MoveDownFunction(index) {
    if (index < task.length - 1 ) {
      let updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setnewTask(updatedTasks);
    }
  }

  function OnchangeFunction(e) {
    setaddTask(e.target.value);
  }

  return (
    <div className="container">
      <h1 className="to-do-list">To Do List App</h1>
      <input
        type="text"
        placeholder="Enter A Task..."
        className="input"
        value={addtask}
        onChange={OnchangeFunction}
      />
      <button onClick={AddFunction} className="add-button">
        Add
      </button>
      <ul className="Task-list">
        {task.map((element, index) => (
          <li key={index}>
            <span className="span-text">{element}</span>
            <button
              onClick={() => DeleteFunction(index)}
              className="delete-button"
            >
              Delete
            </button>
            <button
              onClick={() => MoveUpFunction(index)}
              className="moveup-button"
            >
              MoveUp
            </button>
            <button
              onClick={() => MoveDownFunction(index)}
              className="movedown-button"
            >
              MoveDown
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
