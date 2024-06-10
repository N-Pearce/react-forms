import React from "react";
import './Box.css'

const Box = ({height=50, width=50, color='green', remove}) => {

    return (
        <li className="container">
            <div className="Box" style={{width: `${width}px`, height: `${height}px`, backgroundColor: color}}>

            </div>
            <div className="X" onClick={remove}>X</div>
        </li>
    )
}

export default Box