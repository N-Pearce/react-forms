import {React, useState} from "react";
import Box from "./Box"
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const [boxes, setBoxes] = useState([
        <Box 
        id={1}/>,
        <Box 
        id={2}/>,
        <Box 
        id={3}/>
    ]);

    const addBox = box => {
        let newBox = {...box}
        setBoxes(boxes => [...boxes, newBox])
    }

    const removeBox = (box) => {
        setBoxes(boxes.filter(b => b !== box))
    }

    const boxList = boxes.map(b => (
        <Box 
            height={b.height}
            width={b.width}
            color={b.color}
            key={b.id}
            remove={evt => removeBox(b)}    
        />
    ))

    return (
        <div>
            <NewBoxForm addBox={addBox}/>
            <ul>{boxList}</ul> 
        </div>
    )
}

export default BoxList