import React, { Component, PropTypes } from 'react';

export class ToDoForm extends Component {

  button() {
    if (this.props.toDo.length > 0) {
      return (
        <button className="create-todo btn btn-success form-control" type="submit" >Add</button>
      )
    } else {
      return (
        <button className="create-todo btn btn-success form-control" type="submit" disabled>Add</button>
      )
    }
  }

  render() {
    return (
      <div className = "col-4">
        <form onSubmit={this.props.createToDo}>
          <div className="card card-default">
            <div className="card-header">Add New Todo</div>
            <div className="card-body">
              <div className="form-group">
                <label>I want to..</label>
                <textarea
                  className="create-todo-text"
                  name="create-todo-text"
                  value={this.props.toDo}
                  onChange={this.props.handleText}>
                </textarea>

                <label>How Much of a priority is this?</label>
                <select
                  className="create-todo-priority form-control"                  
                  onChange={this.props.handlePrior}
                >
                  <option defaultValue hidden>Select a Priority</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className="card-footer">
              {this.button()}
            </div>

          </div>
        </form>
      </div>

    )
  }
}