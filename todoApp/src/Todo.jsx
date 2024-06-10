import React from "react";

const Todo = ({task='do a thing', remove}) => {
    return (
        <li className="container">
            <p>{task}</p>
            <div>
                <button onClick={remove}>X</button>
            </div>
        </li>
    )
}

export default Todo