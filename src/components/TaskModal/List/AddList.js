import React, {useState} from 'react';
import './AddList.css';

const AddList = ({addList}) => {

    const [item, setItem] = useState('');

    const handleSubmitItem = (e) => {
        e.preventDefault();
        
        if(!item) return;
        addList(item);
        setItem('');
    }

    return (
        <div className="addlist">

            <form className="addlist-form" onSubmit={handleSubmitItem}>
                <input
                    type="text"
                    className="addlist-input"
                    placeholder='+ add item'
                    value={item}
                    onChange={e => setItem(e.target.value)}
                    
                />
            </form>

        </div>
    )
}

export default AddList;