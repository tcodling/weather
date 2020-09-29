import React from "react";
import logo from "../logo.svg";
import "../App.css";

import dateFormat from "dateformat"

import { getWeather } from "../api/5day";

import Day from "./Day";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],
      city: "",
      search: ""
    };
  }

  componentDidMount = () => {
    getWeather().then((weather) => {
      console.log(weather)
      this.setState({
        days: [
          weather.list[4],
          weather.list[12],
          weather.list[20],
          weather.list[28],
          weather.list[36],
        ],
        city: weather.city
      });
    });
  };

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit!')
    getWeather(this.state.search).then(weather => {
        this.setState({
            search: '',
            days: [
              weather.list[4],
              weather.list[12],
              weather.list[20],
              weather.list[28],
              weather.list[36],
            ],
            city: weather.city
        })
    })
  }

  render() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return (
      <div className="App">
        <h1>Thomas Weather App</h1>
        <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.search} placeholder='Search a place' name='search' id='search' />
            <input type="submit" id='searchSubmit'/>
        </form>
        {this.state.days[0] ?  (
          <>
          <h2>5 Day forecast for {this.state.city.name}, {this.state.city.country}</h2>
          <div className="days">
          <Day
            day={days[dateFormat(this.state.days[0].dt_txt, "N")]}
            conditions={this.state.days[0].weather[0].description}
            temp={this.state.days[0].main.temp}
            logo={this.state.days[0].weather[0].icon}
          />
          <Day
            day={days[dateFormat(this.state.days[1].dt_txt, "N")]}
            conditions={this.state.days[1].weather[0].description}
            temp={this.state.days[1].main.temp}
            logo={this.state.days[1].weather[0].icon}
          />
          <Day
            day={days[dateFormat(this.state.days[2].dt_txt, "N")]}
            conditions={this.state.days[2].weather[0].description}
            temp={this.state.days[2].main.temp}
            logo={this.state.days[2].weather[0].icon}
          />
          <Day
            day={days[dateFormat(this.state.days[3].dt_txt, "N")]}
            conditions={this.state.days[3].weather[0].description}
            temp={this.state.days[3].main.temp}
            logo={this.state.days[3].weather[0].icon}
          />
          <Day
            day={days[dateFormat(this.state.days[4].dt_txt, "N")]}
            conditions={this.state.days[4].weather[0].description}
            temp={this.state.days[4].main.temp}
            logo={this.state.days[4].weather[0].icon}
          />
          </div>
          </>
        ) : <img src="images/loading.gif" />}
      </div>
    );
  }
}

export default App;
