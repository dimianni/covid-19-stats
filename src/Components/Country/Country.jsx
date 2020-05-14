import React, { useState, useEffect } from 'react';
import styles from './Country.module.css';


// Receiving list of countries
import { fetchCountries } from '../../api';

const Country = ({ handleCountryChange }) => {

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


    return (
        <div className={styles.selector}>
            <label htmlFor="countries">Please select a country:</label>
            <select id='countries' defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="Spain" selected>Spain</option>
                {receivedCountries.sort().map((country) => <option key={country} value={country}>{country}</option>)}
            </select>
        </div>


    );
}

export default Country;