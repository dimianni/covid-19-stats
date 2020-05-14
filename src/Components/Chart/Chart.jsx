import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';



const Chart = ({ countryData, country }) => {

    // console.log(countryData);
    

    // Function which calculates the difference of occurrences between days
    function daily(arr) {
        let dailyArr = [];
        for (var i = 1; i < arr.length; i++) {
            let dailyData = arr[i] - arr[i - 1];
            if (dailyData < 0) {
                dailyData = 0
            }
            dailyArr.push(dailyData)
        }
        return dailyArr;
    }

    // Before data is loaded 
    let charts = <div>Loading...</div>;
    let dailyChart = null;
    let activeChart = null;
    let totalChart = null;

    // When data IS LOADED
    if (countryData.date) {

        dailyChart = (
            <Bar
                data={{
                    labels: countryData.date.map(date => new Date(date).toDateString()),
                    datasets: [{
                        data: daily(countryData.confirmed).map(confirmed => confirmed),
                        label: 'Confirmed',
                        borderColor: 'blue',
                        backgroundColor: 'blue',
                        fill: true
                    }, {
                        data: daily(countryData.deaths).map(deaths => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'red',
                        fill: true
                    }, {
                        data: daily(countryData.recovered).map(recovered => recovered),
                        label: 'Recovered',
                        borderColor: 'green',
                        backgroundColor: 'green',
                        fill: true
                    }]
                }}
                options={{
                    scales: {
                        xAxes: [{
                            ticks: {
                                callback: function (tick, index, array) {
                                    return (index % 3) ? "" : tick;
                                }
                            }
                        }]
                    },
                    title: { display: true, text: `Daily Summary in ${country}` },
                    datalabels: { display: false }
                }}
            />

        )

        activeChart = (
            <Line
                data={{
                    labels: countryData.date.map(date => new Date(date).toDateString()),
                    datasets: [{
                        data: countryData.active.map(active => active),
                        label: 'Active',
                        borderColor: 'purple',
                        backgroundColor: 'rgba(21, 31, 48, 0.5)',
                        fill: true
                    }]
                }}
                options={{
                    scales: {
                        xAxes: [{
                            ticks: {
                                callback: function (tick, index, array) {
                                    return (index % 3) ? "" : tick;
                                }
                            }
                        }]
                    },
                    title: { display: true, text: `Currently Active Cases in ${country}` }, 
                    datalabels: { display: false }
                }}
            />
        )

        totalChart = (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['blue', 'green', 'red'],
                        data: [countryData.confirmed[countryData.confirmed.length - 1], countryData.recovered[countryData.recovered.length - 1], countryData.deaths[countryData.deaths.length - 1]]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Total stats in ${country}` },
                    datalabels: {
                        display: true,
                        color: '#fff'
                    }
                }}
            />
        )

        charts = (
            <div>
                <div className={styles.chart}>{activeChart}</div>
                <div className={styles.chart}>{dailyChart}</div>
                <div className={styles.chart}>{totalChart}</div>
            </div>
        )
    }


    return (
        <div className={styles.container}>
            {charts}
        </div>
    );
}

export default Chart;