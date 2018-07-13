import React from 'react'

export const List = ({ editing, onEdit, onRemove, updateToDo, updatePrior, list, handleChecked }) => {

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
    completed(_checked.value)
  }

  const renderEdit = () => {
    return (
      <li className={'edit list-group-item ' + list.priority} id='vstdaEdit'>
        <label>Desription</label>
        <textarea className='update-todo-text' ref={input => _newText = input} type='text' defaultValue={list.toDo}></textarea>

        <div className='row'>
          <div className='form-group col-6'>
            <label className = 'col-4 col-form-label' htmlFor = 'updateToDoPriority' id='update-label'>Priority</label>
            <select className='col-8 update-todo-priority' id = 'updateToDoPriority' ref={input => _priority = input} defaultValue={list.priority}>
              <option value='list-group-item-success'>Low Priority</option>
              <option value='list-group-item-warning'>Medium Priority</option>
              <option value='list-group-item-danger'>High Priority</option>
            </select>
          </div>
          <div className='form-group col-6'>
            <button className='update-todo-btn btn btn-success float-right' onClick={save}>Save</button>
          </div>
        </div>
      </li>
    )
  }

  const renderList = () => {
    return (
      <li className={'list-group-item ' + list.priority} id='list'>
        <span className='todoListText'> {list.toDo} </span>
        <span className='float-right todoListDelete'>
          <a href='#' className='delete-todo' ref={input => _newText = list.toDo} onClick={remove} style={{ color: 'red' }}>
            <i className='far fa-trash-alt float-right'></i>
          </a>
        </span>
        <span className='todoListEdit float-right'>
          <a href='#' className='edit-todo glyphicon glyphicon-edit' onClick={edit}>
            <i className='far fa-edit float-right'></i>
          </a>
        </span>
      </li>
    )
  }

  return (
    (list.editing) ? renderEdit() : renderList()
  )
}