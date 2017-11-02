import React from "react";
import Input from "./Input";
import TaskView from "./TaskView";
import Header from "./Header";

class App extends React.Component {
  state = {
    tasks: [],
    value: ""
  }

  handleInputChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
  }

  handleAddTask = () => {
    this.setState({
      tasks: [...this.state.tasks, {task: this.state.value, id: Date.now()}]
    });
  }

  handleDeleteTask = (id) => {
    const taskList = this.state.tasks.filter(item => item.id !== id);
    this.setState({tasks: taskList});
  }

  render() {
    return (
      <div>
        <Header/>
        <Input handleAddTask={this.handleAddTask} handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange}/>
        <TaskView tasks={this.state.tasks} id={this.state.id} handleDeleteTask={this.handleDeleteTask}/>
      </div>
    )
  }
};

export default App;
