import React, {useState} from 'react';
import {Dropdown, Input} from 'semantic-ui-react';
import Counter from './Counter';
import './Timer.css';

const Timer = () => {

    const [estTime, setEstTime] = useState('');

    const handlePredefinedButtons = (e) => {
        e.preventDefault();
        
        setEstTime(e.target.outerText);
        // console.log('handlePredefinedButtons');
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        setEstTime(e.target.childNodes[0].value)
        console.log(e.target.childNodes[0].value);
    }


    const time = `est: ${estTime}`;
    return (
        <div>
            <p>{time} </p>

            <Counter />

            <Dropdown
                icon='chevron down'
                floating
                className='icon'
            >
            
            <Dropdown.Menu onClick={e => e.stopPropagation()}>
                <h1>Estimated time</h1>
                    <div className="estimated-time">
                        <span onClick={handlePredefinedButtons} className="predefined-time">15m</span>
                        <span onClick={handlePredefinedButtons} className="predefined-time">30m</span>
                        <span onClick={handlePredefinedButtons} className="predefined-time">1h</span>
                        <span onClick={handlePredefinedButtons} className="predefined-time">2h</span>

                        <form 
                            onSubmit={handleFormSubmit}
                        >
                            <input
                                type="text"
                                placeholder='title'
                                onClick={e => e.stopPropagation()}
                            />

                            <button >Add Estimate</button>
                        </form>
                    </div>
            </Dropdown.Menu>

            </Dropdown>


        </div>
    )
}

export default Timer;