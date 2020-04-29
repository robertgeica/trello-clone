import React from 'react';
import './List.css';
const List = ({index, item, markDone}) => {

    console.log(item);
    return (
        <div className="list">
            <i className={item.isDone ? 'far fa-check-square' : 'far fa-square'}
                onClick={() => {
                    markDone(index, item.todo, item.isDone);
                }}
                
            ></i>
            
            <p className="list-element">{item.todo}</p>
        </div>
    )
}

export default List;