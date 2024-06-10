import {React, useState} from "react";
import {v4 as uuid} from 'uuid'

const NewBoxForm = ({addBox}) => {
    const [formData, setFormData] = useState({
        height:'',
        width:'',
        color:''
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
        addBox({...formData, id: uuid()})
        setFormData({height: '', width: '', color: ''})
    }

    return (
        <div>
            <form style={{display: 'inline'}} onSubmit={handleSubmit}>
                Height: <input 
                            onChange={handleChange}
                            type='text' 
                            name='height' 
                            placeholder="50" 
                            value={formData.height}
                            required
                        ></input><br/>
                Width: <input 
                            onChange={handleChange}
                            type='text' 
                            name='width' 
                            placeholder="50"
                            value={formData.width}
                            required
                         ></input><br/>
                Color: <input 
                            onChange={handleChange}
                            type='text' 
                            name='color' 
                            placeholder="green"
                            value={formData.color}
                            required
                        ></input><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewBoxForm