import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../../api';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './Country.module.css';


const Country = ({ handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())
        }

        fetchAPI();
        // Is going to change only when 'setFetchedCountries' change
    }, [setFetchedCountries])

    // console.log(fetchedCountries);


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
                {/* <option value="">Global</option> */}
                {fetchedCountries.map((country) => <option key={country} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default Country;