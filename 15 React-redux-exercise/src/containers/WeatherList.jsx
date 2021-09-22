import React, {Component} from "react";
import {connect} from "react-redux";
import Chart from "../components/Chart";
import GoogleMap from "../components/GoogleMap";

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const tempsKelvin = cityData.list.map((weather) => weather.main.temp);
    const temps = tempsKelvin.map((temp) => temp - 273);
    const pressures = cityData.list.map((weather) => weather.main.pressure);
    const humidities = cityData.list.map((weather) => weather.main.humidity);
    // -ES6 Syntax below
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    const {lon, lat} = cityData.city.coord;

    // console.log(temps);
    return (
      <tr key={name}>
        {/* <td>{name}</td> */}
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temps} color="orange" units="°C" style={{width: "200px", height: "220px"}} />
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPa" style={{width: "200px", height: "220px"}} />
        </td>
        <td>
          <Chart data={humidities} color="black" units="%" style={{width: "200px", height: "220px"}} />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City:</th>
            <th>Temperature [°C]:</th>
            <th>Pressure [hPa]:</th>
            <th>Humidity [%]:</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  //- const weather =state.weather

  return {
    weather: weather,
  };
}

export default connect(mapStateToProps)(WeatherList);
