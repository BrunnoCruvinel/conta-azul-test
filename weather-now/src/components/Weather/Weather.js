import React, { Component } from 'react'
import WeatherBox from './Weather-Box/Weather-Box'

class Weather extends Component {

    constructor(){
      super()
      this.state = {
        cities: {
            'Nuuk,GL': { },
            'Urubici,BR': { },
            'Nairobi,KE': { }
        }
      }

      this.startWeather = this.startWeather.bind(this)
    }

    componentDidMount(){
      this.startWeather()
    }

    cacheWeather(){
      Object.keys(this.state.cities).map((city) => this.getWeather(city))
      localStorage.setItem('lastUpdate', new Date())
    }

    startWeather(){
        if(!localStorage.getItem('lastUpdate')){
          this.cacheWeather() 
        }else{
            const lastUpdate = localStorage.getItem('lastUpdate')
            let minutes = 10;
            if(new Date() > new Date(lastUpdate).getTime() +  minutes*60000){
              this.cacheWeather()
            }else{
              this.setState({ cities: JSON.parse(localStorage.getItem('weather')) })
            }
        }        
    }

    getWeather(city){
        let key = '477e8c525512bcc79bfe23f884646c11'
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`
            
        fetch(url)
          .then(res => res.json())
          .then((result) => {
              result.name = city
              this.setState({ cities: { ...this.state.cities, [city]: result } })
              localStorage.setItem('weather', JSON.stringify(this.state.cities))
          })
          .catch((e) => {
            this.setState({ cities: { ...this.state.cities, [city]: {fail: true} } })
            console.log(e)
          })    
    }

    render() {
        const { cities } = this.state
      return (      
        <section className='weather row column-s'>
            { Object.keys(cities).map((city) => <WeatherBox key={city} city={cities[city]} refresh={this.startWeather} />) }
        </section>
      );
    }
  }


export default Weather
