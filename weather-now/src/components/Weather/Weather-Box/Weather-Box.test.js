import React from 'react';
import ReactDOM from 'react-dom';
import { WeatherBox, Updated, TemperatureColor } from './Weather-Box';

describe('Weather Box component', () => {

    it('Renders Weather Box without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<WeatherBox city={{}} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Test function hour updated correct format', () => {
        expect(Updated().length).toBe(10)
    });

    it.each([[-5, 'blue'],[15, 'orange'], [50, 'red']])
    ('Test function TempertureColor', (temp,expected) => {
        expect(TemperatureColor(temp)).toBe(expected)             
    })
    
});