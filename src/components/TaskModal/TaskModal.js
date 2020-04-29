import React, {useState} from 'react';
import Modal from 'react-modal';
import './TaskModal.css';
import Checklist from './Checklist/Checklist';
import AddChecklist from './Checklist/AddChecklist';
import ModalHeader from './ModalHeader';


const TaskModal = ({index, removeTask, title, selectedTask, handleCloseModal}) => {

    const [checklists, setChecklist] = useState([{title: 'test'}]);
    
    const addChecklist = (title) => {
		const newChecklist = [...checklists, {title}];
		setChecklist(newChecklist);
		console.log('add checklist: ' + title);
	}


    return (
        <Modal
            isOpen={!!selectedTask}
            // isOpen={true}
            contentLabel="Task Modal"
            onRequestClose={handleCloseModal}
            ariaHideApp={false}
            className="modal"

        >
            <ModalHeader 
                handleCloseModal={handleCloseModal}
                addChecklist={addChecklist}
                removeTask={removeTask}
                index={index}
            />

            <div>
                <h1 className="modal-title">{title}</h1>

                {
                    checklists.map((item, index) => (
                    <Checklist 
                        key={index} 
                        item={item}
                        
                    />))
                }
    
            </div>

        </Modal>
    )

}

export default TaskModal;