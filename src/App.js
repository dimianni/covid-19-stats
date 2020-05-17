import React, { Component } from 'react';
import styles from './App.module.css';

// Destructuring from index.js in Components
import { Header, Footer, Chart, Country } from './Components';

// Receiving country data
import { fetchCountryData } from './api';


class App extends Component {

  state = {
    data: {},
    country: '',
    theme: 'light'
  }

  async componentDidMount() {

    const fetchedData = await fetchCountryData();

    this.setState({ data: fetchedData })
    
  }

  // Changing state for a specific country
  handleCountryChange = async (country) => {

    //fetching the data
    const fetchedData = await fetchCountryData(country)

    // setting the state
    this.setState({
      data: fetchedData,
      country: country
    })
  }

  themeSwitcher = () => {
    if (this.state.theme === 'light'){
      this.setState({theme: 'dark'})
    } else {
      this.setState({ theme: 'light' })
    }
  }

  render() {

    // Destructuring state
    const { data, country, theme } = this.state;

    return (
      <div className={theme === 'light' ? styles.Applight : styles.Appdark}>
        <Header themeSwitcher={this.themeSwitcher} theme={theme}/>
        <div className={styles.container}>
          <Country handleCountryChange={this.handleCountryChange} theme={theme} />
          <Chart countryData={data} country={country} />
        </div>
         <Footer />
      </div>
    );
  }
}

export default App;
