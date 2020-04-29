import React from 'react';
import AddChecklist from './Checklist/AddChecklist'
import {Dropdown, Input} from 'semantic-ui-react';
import './ModalHeader.css';
const ModalHeader = ({handleCloseModal, addChecklist, removeTask, index}) => (
    <div className="modalHeader">

        <button 
            className="close-modal  icon"
            icon='close'
            onClick={handleCloseModal}
        > 
            <i className="fas fa-times"></i>
        </button>

        <button 
            className="remove-modal  icon"
            onClick={() => {
                handleCloseModal();
                removeTask(index);        
            }}
        > 
             <i className="far fa-trash-alt"></i>
        </button>

        <Dropdown
            icon='list'
            floating
            className='icon'
        >
            
            <Dropdown.Menu>
                <AddChecklist addChecklist={addChecklist} />  

            </Dropdown.Menu>
        </Dropdown>

    </div>
)

export default ModalHeader;