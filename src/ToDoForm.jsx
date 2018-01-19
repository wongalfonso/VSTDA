import React, { Component, PropTypes } from 'react';

export class ToDoForm extends Component {


  render() {
    return (
      <div className = "col-lg-4">
        <form onSubmit={this.props.createToDo}>
          <div className="panel panel-default">
            <div className="panel-heading">Add New Todo</div>
            <div className="panel-body">
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
                  value={this.props.priority}
                  onChange={this.props.handlePrior}
                >
                  <option defaultValue hidden>Select a Priority</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className="panel-footer">
              <button className="create-todo btn btn-success form-control" type="submit" >Add</button>
            </div>

          </div>
        </form>
      </div>

    )
  }
}