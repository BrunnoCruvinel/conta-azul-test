import React, { Component } from 'react';
import AppContent from './App-content'
import './_App.scss';

class App extends Component {

  constructor(){
    super()
    this.state = {
    
    }
  
  }

  render() {
    return (      
      <AppContent {...this.state} />   
    );
  }
}

export default App;
