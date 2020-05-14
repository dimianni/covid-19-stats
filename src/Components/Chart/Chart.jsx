import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ countryData }) => {

    // console.log(countryData);

    const every = (arr, interval, start) => {
        var result = [];
        for (var i = start || 0; i < arr.length; i += interval || 1) {
            result.push(arr[i]);
        }
        return result;
    }

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


    let charts = <div>Loading...</div>;
    let dailyChart = null;
    let activeChart = null;
    let totalChart = null;

    if (countryData.date) {

        console.log(daily(countryData.confirmed));
        console.log(countryData.confirmed);
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
                    }
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
                        backgroundColor: 'purple',
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
                    title: { display: true, text: `Currently Active Cases in Spain` }
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
                    title: { display: true, text: `Total stats in Spain` }
                }}
            />
        )

        charts = (
            <div>
                <div>{activeChart}</div>
                <div>{dailyChart}</div>
                <div>{totalChart}</div>
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