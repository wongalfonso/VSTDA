import React, { Component, PropTypes } from 'react';
import { List } from "./List.jsx"
import { ToDoForm } from "./ToDoForm.jsx"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      toDo: "",
      priority: "list-group-item-success",
      id: "",
      newTodo: "",
      completed: false,
      editing: false
    };
    this.createToDo = this.createToDo.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleToDo = this.handleToDo.bind(this);
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.handlePrior = this.handlePrior.bind(this);
  }

  createToDo(event) {
    event.preventDefault();
    this.setState({
      lists: [
        {
          id: Date.now(),
          toDo: this.state.toDo,
          priority: this.state.priority,
          editing: this.state.editing,
          completed: this.state.completed
        },
        ...this.state.lists
      ]
    })
  }

  componentDidUpdate(id) {
  
  }

  handleText(event) {
    this.setState({
      toDo: event.target.value
    })
  }

  handlePrior(event) {
    console.log(event.target.value)
    let val;
    if (event.target.value === "3") {val = "list-group-item-danger"} 
    if (event.target.value === "2") {val = "list-group-item-warning"}  
    if (event.target.value === "1") {val = "list-group-item-success"}
    this.setState({
      priority: val
    })
    console.log(this.state.priority)
  }

  handleChecked(event) {
    this.setState({
      checked: event.target.value
    })
  }

  edit(id, bool) {
    this.setState({
      lists: this.state.lists.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            editing: bool
          };
        }
        return todo;
      })
    });
  }
  handleCompleted(id, bool) {
    this.setState({
      lists: this.state.lists.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: bool
          };
        }
        return todo;
      })
    });
  }

  handleToDo(newText, newName, id) {
    this.setState({
      lists: this.state.lists.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            toDo: newText,
            priority: newName,
            editing: false
          };
        }
        return todo
      })
    });
  }

  remove(id) {
    var lists = this.state.lists.filter(list => list.id !== id)
    this.setState({ lists })
    
  }


  render() {
    var newText, newPrior, id;
    return (
      <div className='container'>
        <header className="header col-lg-12">
          <h1>Very Simple Todo App</h1>
          <h4>Track All of the Things</h4>
        </header>
        <ToDoForm
          createToDo={this.createToDo}
          toDo={this.state.toDo}
          handleText={this.handleText}
          priority={this.state.priority}
          handlePrior={this.handlePrior}
        />
        <div className="col-lg-8">
          <div className="panel panel-default " id="panel">
            <div className="panel-heading">
              <h3 className="panel-title">View Todos</h3>
            </div>
            <ul className="list-group">
              {this.state.lists.map((list, i) => {
                return (
                  <List
                    key={list.id}
                    id={list.id}
                    list={list}
                    checked={this.state.checked}
                    completed={this.state.completed}
                    editing={this.state.editing}
                    priority={this.state.priority}
                    completed={this.handleChecked}
                    updateToDo={this.handleToDo}
                    onRemove={this.remove.bind(this, list.id)}       
                    handleChecked={this.handleChecked}                    
                    onEdit={this.edit}
                  >
                    {list.toDo}
                  </List>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
