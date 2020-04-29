import React from 'react';
import styles from './Card.module.css';
import CountUp from 'react-countup';

const Card = ({ status, value, lastUpdate }) => {
    return (
        <div>
            <div>{status}</div>
            <div>
                <CountUp start={0} end={value} duration={2.5} separator="," />
            </div>
            <div>{new Date(lastUpdate).toDateString()}</div>
        </div>
    );
}

export default Card;