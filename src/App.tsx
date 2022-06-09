import React from 'react';
import './App.css';
import Forecast from './components/Forecast/Forecast';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <Header/>
      <Forecast/>
    </div>
  );
}

export default App;
