import React, {useState} from 'react';
import Task from './Task';
import AddTask from './AddTask'; 
import '../styles/Card.css';


const Card = ({card}) => {

    const [tasks, setTask] = useState([{title: 'test'}]);

    const addTask = (title) => {
		const newTask = [...tasks, {title}];
		setTask(newTask);
		console.log('add task: ' + title);
	}

    const removeTask = (index) => {
        const newTask = [...tasks];
        newTask.splice(index, 1);
        setTask(newTask);
    }

    return(
        <div className="card">
        
            <h1 className="card-title">{card.title}</h1>

            <div className="tasks">
                {
                    tasks.map((task, index) => (
                    <Task 
                        key={index} 
                        index={index} 
                        task={task} 
                        removeTask={removeTask} 
                    />))
                }
                
			</div>
            
			<AddTask addTask={addTask} placeholder="add task" />

        </div>
        
    );
        
}


export default Card;