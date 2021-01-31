import React from 'react';

const Form = ({setInputText, setTodos, todos, inputText, setStatus}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    };

    const sumbitTodoHandler = (e) => {
        e.preventDefault();
        setInputText("");
        if(!inputText){
            return false;
        } 
        setTodos([...todos, {text: inputText , completed: false, id: Math.random()*1000}]);
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    
    return( 
        <form>
            <input value={inputText} onChange = {inputTextHandler} type="text"className="todo-input"  />
            <button className="todo-button" type="submit" onClick= {sumbitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form
