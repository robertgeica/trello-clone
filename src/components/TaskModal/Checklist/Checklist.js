import React, { useState } from 'react';
import './Checklist.css';
import List from '../List/List';
import AddList from '../List/AddList';

const Checklist = ({item}) => {

    const [list, setList] = useState([]);

    const addList = (todo, isDone) => {
		const newList = [...list, {todo, isDone: false}];
		setList(newList);
		console.log('add todo: ' + todo);
    }

    const markDone = (index, todo, isDone) => {
        const newList = [...list];
        newList[index] = {todo: todo, isDone: !isDone};
        setList(newList);
        console.log('marked as done: ' + index);
    }

    const completed = list.filter(item => {
        return item.isDone;
    })

    
    console.log(list);
    return (
        <div className="checklist-container">

            <div className="checklist-stats">    
                <p className="checklist-title">
                    {item.title}
                </p>

                <p className="done-undone">
                    {completed.length}/{list.length}
                </p>    
            </div>

            {
                list.map((item, index) => (
					<List 
						key={index} 
                        index={index}
						item={item}
                        markDone={markDone}
					/>))

            }

            <AddList addList={addList} />
        </div>
    )
}

export default Checklist;