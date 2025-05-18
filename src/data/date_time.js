import React, { useState, useEffect } from 'react';

function getCurrentTime() {
    const date = new Date();
    const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };

    if (date.getHours() > 12) {
        options.hour12 = true;
    }

    const timeString = date.toLocaleTimeString('en-US', options);
    return `GMT+5:30 / ${timeString}`;
}

const TimeDisplay = ({ style }) => {
    const [time, setTime] = useState(getCurrentTime());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(getCurrentTime());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return <h5 style={style}>{time}</h5>;
};

export default TimeDisplay;
