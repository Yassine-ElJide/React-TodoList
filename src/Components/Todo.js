
const Todo = ({text, todos, todo,  setTodos}) => {

    const deleteHandler = () => {
        const filteredTodos = todos.filter(el => el.id !== todo.id)
        setTodos(filteredTodos)
    }
    
    const completeHandler = () => {
        const completedTodos = todos.map(el => {
            if(el.id === todo.id){
                return {...el, completed: !el.completed}
            } return el
        })
        setTodos(completedTodos)
    }

    return (
        <div className="todo">
            <li className= {`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button className="complete-btn" onClick = {completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick = {deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;