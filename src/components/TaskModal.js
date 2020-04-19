import React from 'react';
import Modal from 'react-modal';
import '../styles/TaskModal.css';

const TaskModal = ({index, removeTask, title, selectedTask, handleCloseModal}) => (
    <Modal
        isOpen={!!selectedTask}
        contentLabel="Task Modal"
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
        className="modal"

    >
        <div >

            <button 
                className="close-modal button"
                onClick={handleCloseModal}
            > <i class="far fa-window-close"></i>
            </button>

            <button 
                className="remove-modal button"
                onClick={() => {
                    handleCloseModal();
                    removeTask(index);        
                }}
            > <i class="far fa-minus-square"></i>
            </button>

            <h1 className="modal-title">{title}</h1>
        
        </div>


    </Modal>
)

export default TaskModal;