import React from "react";
import TaskList from "./TaskList";

const TaskView = (props) => {
  return (
    <div>
      <TaskList tasks={props.tasks} id={props.id} handleDeleteTask={props.handleDeleteTask}/>
    </div>
  )
};

export default TaskView;
