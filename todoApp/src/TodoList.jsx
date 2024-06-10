import {React, useState} from "react";
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
    const [todos, setTodos] = useState([
        <Todo 
        id={1}/>,
        <Todo 
        id={2}/>
    ]);

    const addTodo = todo => {
        let newTodo = {...todo}
        setTodos(todos => [...todos, newTodo])
    }

    const removeTodo = (todo) => {
        setTodos(todos.filter(t => t !== todo))
    }

    const todoList = todos.map(t => (
        <Todo 
            task={t.task}
            key={t.id}
            remove={evt => removeTodo(t)}    
        />
    ))

    return (
        <div>
            <NewTodoForm addTodo={addTodo}/>
            <ul>{todoList}</ul> 
        </div>
    )
}

export default TodoList