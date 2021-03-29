import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name}, my age is {props.age}</p>
            <p>{props.children}</p>
            <input tpye="text" onChange={props.changed} value={props.name} />
        </div>

    )
};

export default Radium(person);