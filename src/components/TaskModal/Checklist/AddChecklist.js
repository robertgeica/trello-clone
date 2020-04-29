import React, {useState} from 'react';
import './AddChecklist.css';

const AddChecklist = ({addChecklist}) => {

    const [checklist, setChecklist] = useState('');

    const handleSubmitChecklist = (e) => {
        e.preventDefault();
        
        if(!checklist) return;
        addChecklist(checklist);
        setChecklist('');
    }

    return (
        <div className="checklist">
            <h3>Add Checklist</h3>

            <form 
                onSubmit={handleSubmitChecklist}
                className="checklist-form"
            >
                <input
                    type="text"
                    className="checklist-input"
                    placeholder='title'
                    value={checklist}
                    onClick={e => {e.stopPropagation()}}
                    onChange={e => setChecklist(e.target.value)}
                />

                <button className="addChecklistBtn">Add task</button>
            </form>

        </div>
    )
}

export default AddChecklist;