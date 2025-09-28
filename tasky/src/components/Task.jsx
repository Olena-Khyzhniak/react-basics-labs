import React from 'react';

const Task = (props) => {
    let priorityClass = "";
    if (props.priority === 'High') 
        priorityClass = 'high';
    if (props.priority === 'Medium') 
        priorityClass = 'medium';
    if (props.priority === 'Low') 
        priorityClass = 'low';
    
    
    return (
         <div className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.children}</p>
            <p className="description">{props.description}</p>
            <p className={`priority ${priorityClass}`} > priority: {props.priority}</p>
        </div>
    )
}

export default Task;
