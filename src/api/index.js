import axios from 'axios';

const apiUrl = 'https://covid19.mathdro.id/api';

// CHECK INITIAL RESPONSES!!


//----------------------------------------------Data for the cards----------------------------------------------
// Asynchronous function
export const dataFetched = async (country) => {

    let changeableURL = apiUrl;

    // If a county is selected the url for the data changes:
    if(country) {
        changeableURL = `${apiUrl}/countries/${country}`
    }

    try {
        // Destructuring data
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableURL)

        // After destructuring we do not need to specify 'data.confirmed/recovered/etc'
        // We could write 'confirmed: confirmed' OR simply 'confirmed'
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }

        return modifiedData;

        // OR SIMPLY

        // return { confirmed, recovered, deaths, lastUpdate };

    } catch (error) {

    }
}

//----------------------------------------------Data for the chart----------------------------------------------

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${apiUrl}/daily`)
        
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        
        return modifiedData;

    } catch (error) {
        
    }
}


//----------------------------------------------Countries----------------------------------------------

export const fetchCountries = async () => {
    try {

        const {data: {countries}} = await axios.get(`${apiUrl}/countries`)

        return countries.map((country) => {
            return country.name
        })
        
    } catch (error) {
        console.log(error)
    }
}