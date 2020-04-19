import React, {useState} from 'react';
import '../styles/AddCard.css';

const AddCard = ({addCard, placeholder}) => {

    const [value, setValue] = useState('');

    const handleSubmitCard = (e) => {
        e.preventDefault();
        
        if(!value) return;
        addCard(value);
        setValue('');
    }

    return (
        <div className="card empty-card">

            <form onSubmit={handleSubmitCard}>
                <input
                    type="text"
                    className="addCard-input"
                    placeholder={placeholder}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    
                />
            </form>

        </div>
    )
}

export default AddCard;