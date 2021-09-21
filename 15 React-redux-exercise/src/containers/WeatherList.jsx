import React, {Component} from "react";
import {connect} from "react-redux";
import Chart from "../components/Chart";

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map((weather) => weather.main.temp);
    // console.log(temps);
    return (
      <tr key={name}>
        <td>{name}</td>
        <td style={{width: "190px", height: "130px", margin: "5px"}}>
          <Chart data={temps} color="orange" />
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
            <th>Temperature:</th>
            <th>Pressure:</th>
            <th>Humidity:</th>
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
