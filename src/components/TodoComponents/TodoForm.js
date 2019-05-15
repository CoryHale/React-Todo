import React from "react";

const TodoForm = props => {
    return (
        <form name="todoForm" onSubmit={props.addTodoHandler}>
            <input 
                type="text" 
                value={props.task} 
                placeholder="Enter a todo here..."
                name="task"
                onChange={props.changeHandler}
            />
            <button onClick={props.addTodoHandler}>Add Todo</button>
            <button onClick={props.deleteCompletedHandler}>Clear Completed</button> 
        </form>
    )
}

export default TodoForm;