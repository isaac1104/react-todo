import React from "react";

const Input = (props) => {
  return (
    <div>
      <form onSubmit={props.handleFormSubmit}>
        <input onChange={props.handleInputChange} id="input" type="text" autoComplete="off"></input>
        <button onClick={props.handleAddTask} type="submit">add</button>
      </form>
    </div>
  )
};

export default Input;
