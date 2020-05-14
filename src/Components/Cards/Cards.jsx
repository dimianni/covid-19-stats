import React from 'react';
import styles from './Cards.module.css';
import Spinner from '../../UI/Spinner/Spinner'

import Card from '../Card/Card'

const Cards = ({ confirmed, recovered, deaths, active }) => {


    let cardList = <Spinner />

    if (confirmed) {
        const status = ["Currently Infected", "Total Recoveries", "Total Deaths"]
   
        cardList = (
            <div className={styles.wrapper}>
                <Card status={status[0]} value={confirmed.value}  />
                <Card status={status[1]} value={recovered.value}  />
                <Card status={status[2]} value={deaths.value} />
            </div>
        )
    }

    return (
        <div className={styles.container}>
            {cardList}
        </div>
    );
}

export default Cards;