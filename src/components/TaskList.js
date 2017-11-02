import React from "react";

const TaskList = (props) => {
  return (
    <ul>
      {props.tasks.map((task) => {
        return (
          <div className="list-items">
            <li id={task.id}>{task.task}</li>
            <button onClick={() => props.handleDeleteTask(task.id)} type="button">x</button>
          </div>
        )
      })}
    </ul>
  )
};

export default TaskList;
