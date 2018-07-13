import React, { Component } from 'react';
import { List } from './List.jsx'
import { ToDoForm } from './ToDoForm.jsx'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      toDo: '',
      priority: 'list-group-item-success',
      id: '',
      newTodo: '',
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
      ],
      toDo: '',
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
    let val;
    if (event.target.value === '3') { val = 'list-group-item-danger' }
    if (event.target.value === '2') { val = 'list-group-item-warning' }
    if (event.target.value === '1') { val = 'list-group-item-success' }
    this.setState({
      priority: val
    })
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
    return (
      <div className='vstdaProject'>
        <div className='container vstdaContainer'>
        <div className='row'>
          <div id='vstdaHeader' className='col-lg-12'>
            <h1>Very Simple Todo App</h1>
            <h4 className = 'vstdah4'>Track All of the Things</h4>
          </div>        
        </div>

          <div className='row'>
            <ToDoForm
              createToDo={this.createToDo}
              toDo={this.state.toDo}
              handleText={this.handleText}
              priority={this.state.priority}
              handlePrior={this.handlePrior}
            />

            <div className='col-8'>
              <div className='card card-default' id='ListCard'>
                <div className='card-header'>View Todos</div>
                <ul className='list-group'>
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
        </div>
      </div>
    )
  }
}


