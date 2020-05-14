import React, { Component } from 'react';
import styles from './App.module.css';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

import { Cards, Chart, Country } from './Components';
import { fetchCountryData } from './api';


class App extends Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {

    const fetchedData = await fetchCountryData();

    this.setState({ data: fetchedData })
    console.log(this.state.data.date);
    
  }

  // handleCountryChange = async (country) => {

  //   //fetch the data

  //   const fetchedData = await fetchCountryData(country)
  //   console.log(fetchedData);

  //   this.setState({
  //     data: fetchedData,
  //     country: country
  //   })
  //   // set the state
  // }

  render() {

    // Destructuring state

    const { data, country } = this.state;

    return (
      <div className={styles.app}>
        <Header />
        <div className={styles.container}>
          {/* <Cards data={data} /> */}
          {/* <Country handleCountryChange={this.handleCountryChange} /> */}
          <Chart countryData={data} />
          {/* <Chart countryData={data} country={country} /> */}
        </div>
         <Footer />
      </div>
    );
  }
}

export default App;
