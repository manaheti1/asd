import React, { useState, useCallback } from 'react'
import { v4 } from 'uuid'
import List from './list'
const AddForm = () => {
    const [textInput, setTextInput] = useState("")
    const [toDoList, setToDoList] = useState([])
    const onTextInputChange = useCallback((e) => {
        setTextInput(e.target.value);
    }, []);

    const onClick = useCallback((e) => {
        var id = v4()
        setToDoList([...toDoList, { id: id, name: textInput, isComplete: false }])
        setTextInput("");
    }, [textInput]);

    return <div id="addForm">
        <div className="input-group">
    <div className="form-outline">
      <input placeholder="Enter name" onChange={onTextInputChange} id="search-input" type="search" className="form-control" />
      <label className="form-label" for="form1">Search</label>
    </div>
    <button id="add" onClick={onClick} disabled={!textInput} type="button" className="btn btn-primary">
      <i className="fas fa-search"></i>
    </button>
  </div>

        <List list={toDoList}/>
    </div >
}

export default AddForm;