import React, {useState, useEffect} from 'react';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all"); 
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch(status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  useEffect(() => {
    getLocalTodos()
  }, []);
  
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [status, todos])

  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    } else{
      let localTodo = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodo)
    }
  }

  return(
    <div className="app">
      <header>
        <h1>Todo List</h1> 
      </header>
      <Form setInputText={setInputText} setTodos={setTodos} todos={todos} inputText={inputText} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos = {filteredTodos}/>
    </div>
  )
};


export default App