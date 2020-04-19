import React, {useState} from 'react';
import '../styles/AddTask.css';


const AddTask = ({addTask, placeholder}) => {

    const [value, setValue] = useState('');

    const handleSubmitTask = (e) => {
        e.preventDefault();
        
        addTask(value);
        setValue('');

    }

    return (
        <form onSubmit={handleSubmitTask}>
            <input
                className="task-input"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={e => setValue(e.target.value)}
                
            />
        </form>
    )
}

export default AddTask;