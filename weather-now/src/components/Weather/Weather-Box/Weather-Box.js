import React from 'react'
import Loader from '../../Loader/Loader'
import Button from '../../Button/Button'
import PropTypes from 'prop-types'

export const TemperatureColor = (temp) => {
    temp = parseInt(Math.round(temp))
    if(temp < 6) return 'blue'
    if(temp > 5 && temp < 25) return 'orange'
    if(temp > 25) return 'red'
}

export const Updated = () => {
    const date = new Date(localStorage.getItem('lastUpdate'))
    return date.toLocaleTimeString('pt-BR', { hour12: true });
}

export const WeatherBox = ({ city, refresh }) => (
    
        <div className='weather-box'>
            <div className='weather-box-title'>{ city.name }</div>
            { city.main ? 
                    <React.Fragment>
                        <div className={`weather-box-temperature color-${TemperatureColor(city.main.temp)} row`}>
                            <div>{Math.round(city.main.temp)}</div>
                            <div className='weather-box-temperature-c'>º</div>
                        </div>
                        <div className='weather-box-info'>
                            <div className='row weather-box-info-data'>
                                <div className='column'>
                                    <div className=''>HUMIDITY</div>
                                    <div className=''>{ city.main.humidity }<span>%</span></div>
                                </div>
                                <div className='column'>
                                    <div>PRESSURE</div>
                                    <div>{ Math.floor(city.main.pressure) }<span>hPa</span></div>
                                </div>
                            </div>
                            <div className='weather-box-info-update'>Updated at { Updated() }</div>
                        </div>
                    </React.Fragment>

                :
                    city.cod ?
                        <div className='weather-box-wrong'>
                            <div>Something went wrong</div><br/>
                            <Button event={refresh}>Try Again</Button>
                        </div>
                    :
                        <div className='weather-box-loader'><Loader /></div>

                }
            
        </div>
)


WeatherBox.propTypes = {
    city: PropTypes.object.isRequired,
    refresh:  PropTypes.func
}

export default WeatherBox
