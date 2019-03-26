import React from 'react';
import Button from './Button';
import ReactDOM from 'react-dom';

describe('Test Button component', () => {
    it('Test Button render', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Button children='OK' event={()=>alert(1)} />, div);            
        ReactDOM.unmountComponentAtNode(div);  
    });
});