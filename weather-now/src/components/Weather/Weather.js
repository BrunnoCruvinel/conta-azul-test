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

      Object.keys(this.state.cities).map((city) => {

        Weather.getWeather(city).then((result) => {
          result.name = city;
          this.setState({ cities: { ...this.state.cities, [city]: result } });
          localStorage.setItem('weather', JSON.stringify(this.state.cities));
        })        
        return true
      })
      localStorage.setItem('lastUpdate', new Date())
    }

    
    static cacheTime(date){
      let minutes = 10
      return new Date() > new Date(date).getTime() +  minutes*60000
    }

    startWeather(){
        if(!localStorage.getItem('lastUpdate')){
          this.cacheWeather() 
        }else{             
            if(Weather.cacheTime(localStorage.getItem('lastUpdate'))){
              this.cacheWeather()
            }else{
              this.setState({ cities: JSON.parse(localStorage.getItem('weather')) })
            }
        }        
    }

    static async getWeather(city){

      let key = '477e8c525512bcc79bfe23f884646c11'
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`
            
      try {
        return await fetch(url).then(res=>res.json());
      }
      catch (e) {
        return false;
      }    
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
