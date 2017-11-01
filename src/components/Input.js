import React from "react";

const Input = (props) => {
  return(
    <div>
      <h1 className="text-center">To-Do List with React</h1>
      <form onSubmit={props.handleFormSubmit}>
        <input id="input" type="text" autoComplete="off"></input>
        <button onClick={props.handleAddTask} type="submit">add</button>
      </form>
    </div>
  )
};

export default Input;
