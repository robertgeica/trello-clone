import React, {useState} from 'react';


const ms = require('pretty-ms');

const Counter = () => {


    const [timer, setTimer] = useState(
        {
            totalTime: 0,
            start: 0,
            stop: 0,
            isOn: false
        }
    );

    const [timerSession, setTimerSession] = useState([]);


    const startTimer = (e) => {
        e.preventDefault();
        setTimer({totalTime: 0, start: new Date(), stop: 0, isOn: true})
    }

    const stopTimer = (e) => {
        e.preventDefault();
        const fromHour = `${timer.start.getHours()}:${timer.start.getMinutes()}`;
        const toHour = `${new Date().getHours()}:${new Date().getMinutes()}`;
        const currentMonth = `M:${new Date().getMonth() + 1}`;
        const currentDay = `D:${new Date().getDay() +1}`;
        const totalTime = Date.now() - timer.start;

        updateTimerSession(fromHour, toHour, currentMonth, currentDay, ms(totalTime));

        setTimer({totalTime: totalTime, start: 0, stop: 0, isOn: false})
    }

    const updateTimerSession = (fromHour, toHour, currentMonth, currentDay, totalTime) => {

        let update = {
            fromHour,
            toHour,
            currentMonth,
            currentDay,
            totalTime
        }

        const totalSessions = [...timerSession, update];
        setTimerSession(totalSessions);
    }



    return (
        <div>

            <button onClick={startTimer}> start </button>
            <button onClick={stopTimer}> stop </button>


            <h2>-{ms(timer.totalTime)}</h2>


            <br />

            {
                timerSession.map(item => (
                    <p>{item.currentMonth} {item.currentDay}, {item.fromHour} -> {item.toHour}  {item.totalTime}</p>
                ))
            }





        </div>
    )
}

export default Counter;