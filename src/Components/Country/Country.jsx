import React, { useState, useEffect } from 'react';
import styles from './Country.module.css';


// Receiving list of countries
import { fetchCountries } from '../../api';



const Country = ({ handleCountryChange, theme }) => {

    // state = {
    //     fetchedCountries:[]
    // } Equals to:
    const [receivedCountries, setReceivedCountries] = useState([])


    // Instead of componentDidMount we can use:
    useEffect(() => {

        // Instead of setState call a function
        const fetchAPI = async () => {
            setReceivedCountries(await fetchCountries())
        }
        fetchAPI();
        // Is going to change only when 'setReceivedCountries' change
    }, [setReceivedCountries])


    // Class Switcher
    let selectorClasses = [`${styles.selectorView}`]

    if (theme === 'dark'){
        selectorClasses.push(`${styles.selectorViewDark}`)
    } else {
        selectorClasses = [`${styles.selectorView}`]
    }


    return (
        <div className={styles.selector}>
            <label htmlFor="countries" className={theme === 'light' ? styles.countyLabelLight : styles.countyLabelDark}>Please select a country:</label>
            <select id='countries' defaultValue='' onChange={(e) => handleCountryChange(e.target.value)} className={selectorClasses.join(' ')}>
                <option value="Spain" defaultValue>Spain</option>
                {receivedCountries.sort().map((country) => <option key={country} value={country}>{country}</option>)}
            </select>
            <div className={styles.disclaimer}>All data is received from Postman API</div>
            <div className={theme === 'light' ? styles.notificationLight : styles.notificationDark}>For a better view of the charts, please turn your device to landscape orientation.</div>
        </div>
    );
}

export default Country;