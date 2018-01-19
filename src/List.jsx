import React from "react"

export const List = ({ editing, onEdit, onRemove, updateToDo, updatePrior, list, handleChecked}) => {

  const edit = () => {
    onEdit(list.id, true);
  }
  let _newText, _priority, _checked, style;

  const remove = () => {
    onRemove(list.id)
  }
  const save = () => {
    updateToDo(_newText.value, _priority.value, list.id)
  }
  const completed = () => {
    console.log(_checked.value)
    completed(_checked.value)
  }

  const renderEdit = () => {
    return (
      <li className={"edit list-group-item " + list.priority}
          id ="edit">
        <label>Desription</label>
        <textarea className="update-todo-text"
          ref={input => _newText = input}
          type ="text"
          defaultValue={list.toDo}
        >
        </textarea>
        <label id="update-label">Priority</label>
        <select className="update-todo-priority col-lg-4"
          ref={input => _priority = input}
          defaultValue={list.priority}>
          <option value="list-group-item-success">Low Priority</option>
          <option value="list-group-item-warning">Medium Priority</option>
          <option value="list-group-item-danger">High Priority</option>
        </select>
        <button className="update-todo btn btn-success pull-right" 
                onClick={save}>Save</button>
      </li>
    )
  }

  const renderList = () => {
    return (
      <li className={"list-group-item " + list.priority} id = "list">
          <input  className="form-check-input"
                  ref={input => _checked = input}
                  type="checkbox"
                  checked = {false}
                  onChange = {handleChecked}
                  className="col-lg-1"
          />
          <span className="col-lg-8">
            {list.toDo}
          </span>
          <a  href = "#"
              className="edit-todo glyphicon glyphicon-edit col-lg-1"
              onClick={edit}
              >
          </a>
          <a  href = "#"
              className="delete-todo glyphicon glyphicon-trash col-lg-1"
              ref={input => _newText = list.toDo}
              onClick={remove}
              style ={{color: "red"}}>
          </a>
      </li>
    )
  }

  return (
    (list.editing) ? renderEdit() : renderList()
  )
}