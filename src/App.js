import React, { Component } from 'react';
import styles from './App.module.css';

import { Cards, Chart, Country } from './Components';
import { dataFetched } from './api'

class App extends Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {

    const fetchedData = await dataFetched();

    this.setState({data: fetchedData})
  }

  handleCountryChange = async (country) => {

    //fetch the data

    const fetchedData = await dataFetched(country)
    console.log(fetchedData);
    
    this.setState({
      data: fetchedData,
      country: country
    })
    // set the state
  }

  render() {

    // Destructuring state

    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
