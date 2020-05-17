import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
import Aux from '../../hoc/Aux/Aux';
import Spinner from '../../UI/Spinner/Spinner'


const Chart = ({ countryData, country }) => {
  
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
    let charts = <Spinner />;
    let dailyChart = null;
    let activeChart = null;
    let totalChart = null;

    // When data IS LOADED
    if (countryData.date) {

        if (countryData.date.length === 0) {
            return <div>Sorry...I was unable to get the data from {country} ;(</div>
        }

        dailyChart = (
            <Aux>
                <div className='chartTitle'>Daily Summary in {country ? country : 'Spain'}</div>
                <Bar
                    data={{
                        labels: countryData.date.map(date => new Date(date).toDateString()),
                        datasets: [{
                            data: daily(countryData.confirmed).map(confirmed => confirmed),
                            label: 'Confirmed',
                            backgroundColor: '#24307B',
                            fill: true
                        }, {
                            data: daily(countryData.deaths).map(deaths => deaths),
                            label: 'Deaths',
                            // borderColor: 'red',
                            backgroundColor: '#B32222',
                            fill: true
                        }, {
                            data: daily(countryData.recovered).map(recovered => recovered),
                            label: 'Recovered',
                            // borderColor: 'green',
                            backgroundColor: '#1A8B28',
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
                        datalabels: { display: false }
                    }}
                />
            </Aux>
        )

        activeChart = (
            <Aux>
                <div className='chartTitle'>Current Active Cases in {country ? country : 'Spain'}</div>
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
                        datalabels: { display: false }
                    }}
                />
            </Aux>

        )

        totalChart = (
            <Aux>
                <div className='chartTitle'>Total stats in {country ? country : 'Spain'}</div>
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: ['#24307B', '#1A8B28', '#B32222'],
                            data: [countryData.confirmed[countryData.confirmed.length - 1], countryData.recovered[countryData.recovered.length - 1], countryData.deaths[countryData.deaths.length - 1]]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        datalabels: {
                            display: true,
                            color: '#fff'
                        }
                    }}
                />
            </Aux>
        )

        charts = (
            <Aux>
                <div className={styles.chart}>{activeChart}</div>
                <div className={styles.chart}>{dailyChart}</div>
                <div className={styles.chart}>{totalChart}</div>
            </Aux>
        )
    }


    return (
        <div className={styles.container}>
            {charts}
        </div>
    );
}

export default Chart;