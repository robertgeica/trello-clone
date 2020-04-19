import React, {useState} from 'react';
import TaskModal from './TaskModal';
import '../styles/Task.css';


const Task = ({index, removeTask, task}) => {

    const [selectedTask, openTaskModal] = useState(false);

    const handleOpenModal = e => {
        openTaskModal(e.target);
        console.log('opened: ' + e.target);
    }

    const handleCloseModal = e => {
        openTaskModal(undefined);
        console.log('handled close');
    }

    return (
        <div>

            <TaskModal 
                title={task.title}
                selectedTask={selectedTask}
                handleCloseModal={handleCloseModal}
                index={index}
                removeTask={removeTask}
            />
            
            <p 
                onClick={handleOpenModal} 
                className="task-title"
            >
                {task.title ? task.title : ''}
            </p>

        </div>
    );


}


export default Task;