import React from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Weather from '../../components/Weather/Weather'

const AppContent = () => (
    <div className="App">
        <Header />
        <Main>
          <Weather />
        </Main>
    </div>
)

export default AppContent