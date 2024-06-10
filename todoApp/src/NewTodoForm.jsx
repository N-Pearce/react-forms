import {React, useState} from "react";
import {v4 as uuid} from 'uuid'

const NewTodoForm = ({addTodo}) => {
    const [formData, setFormData] = useState({
        task: ""
    })

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        addTodo({...formData, id: uuid()})
        setFormData({task:''})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Height: <input 
                            onChange={handleChange}
                            type='text' 
                            name='task' 
                            placeholder="todo" 
                            value={formData.task}
                            required
                        ></input><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewTodoForm