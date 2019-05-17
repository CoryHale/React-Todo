import React from "react";

import Todo from "./Todo";
import "./Todo.css";

const TodoList = props => {
    return (
        <div>
            {props.todoList.map(task => (
                <Todo id={task.id} task={task.task} completed={task.completed} toggleTodo={props.toggleTodo} />
            ))}
        </div>
    )
}

export default TodoList;