import React from "react";
import Input from "./components/Input";
import TaskView from "./components/TaskView";
import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
  }

  handleAddTask = () => {
    this.setState({
      tasks: [
        ...this.state.tasks, {
          task: document.getElementById("input").value,
          id: Date.now()
        }
      ]
    });
    document.getElementById("input").value = null;
  }

  handleDeleteTask = (id) => {
    const taskList = this.state.tasks.filter(item => item.id !== id);
    this.setState({tasks: taskList});
  }

  render() {
    return (
      <div>
        <Header/>
        <Input handleAddTask={this.handleAddTask} handleFormSubmit={this.handleFormSubmit}/>
        <TaskView tasks={this.state.tasks} id={this.state.id} handleDeleteTask={this.handleDeleteTask}/>
      </div>
    )
  }
};

export default App;
