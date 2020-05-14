import axios from 'axios';

const postmanURL = 'https://api.covid19api.com';


// Why use Axios and not built-in fetch?
// Axios deals with JSON, we do not have to convert it to object; Article:
// https://blog.logrocket.com/axios-or-fetch-api/

// Async / Await:
// https://medium.com/javascript-in-plain-english/async-await-javascript-5038668ec6eb
// Alternative to classic Promise of fetch(api).then(res => res.json()).then(data => data).catch()

// Promises in JS:
// https://medium.com/javascript-in-plain-english/truly-understanding-promises-in-javascript-cb31ee487860

//----------------------------------------------Fetching Country Data----------------------------------------------

export const fetchCountryData = async (country) => {

    let changeableURL = `${postmanURL}/country/spain`

    if (country) {
        changeableURL = `${postmanURL}/country/${country}`
    }

    // Try...Catch - is a good way to handle errors; Especially if you do not have .catch in the Promise
    // Try...Catch in JS:
    // https://javascript.info/try-catch

    try {
        // Data is an array of objects
        // Waiting for the data to be received and then storing it in 'data'
        const { data } = await axios.get(changeableURL)

        let confirmed = data.map(numConfirmed => {
            return numConfirmed.Confirmed
        })
        let recovered = data.map(numRecovered => {
            return numRecovered.Recovered
        })
        let deaths = data.map(numDeaths => {
            return numDeaths.Deaths
        })
        let active = data.map(numActive => {
            return numActive.Active
        })
        let date = data.map(date => {
            return date.Date
        })

        // Object of arrays
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            active,
            date
        }
        console.log(modifiedData)

        return modifiedData;

        // OR SIMPLY

        // return { confirmed, recovered, deaths, lastUpdate };

    } catch (error) {
        console.log(error.name);
        console.log(error.message);
        // Throwing Error (my own Error object)
        return new Error("Couldn't fetch country data.")
    }
}


//----------------------------------------------Getting list of Countries----------------------------------------------

export const fetchCountries = async () => {

    try {

        const { data } = await axios.get(`${postmanURL}/countries`)

        return data.map((country) => {
            return country.Country
        })

    } catch (error) {
        console.log(error)
        return new Error("Couldn't fetch countries.")
    }
}