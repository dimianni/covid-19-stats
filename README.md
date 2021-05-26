# COVID-19 Worldwide Statistics App

This is one of my personal projects. It is a web app which outputs total cases, deaths, and recoveries in countries around the world. Quick technical facts about the project:

- The project is built with [Create React App](https://create-react-app.dev/).
- [Axios](https://www.npmjs.com/package/axios) is used to retrieve data from [Covid-19 API](https://api.covid19api.com/).
- [Chart.js](https://www.npmjs.com/package/chart.js) is used to draw the charts from the data received.
- The app was deployed with gh-pages. More information on the process can be found [here](https://create-react-app.dev/docs/deployment/#github-pages).

## To clone the repo, run the following command:

```bash
git clone https://github.com/dimianni/covid-19-stats.git
```

## Usage

There are just a few commands to be aware of:

```bash
npm run start
```

Will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```bash
npm run test
```

Will launch the test runner in the interactive watch mode.


```bash
npm run build
```
Will create a production build.

## Contributing

Pull requests are welcome. Feel free to suggest any other features! Currect app components and containers can be found in the __src__ folder.
