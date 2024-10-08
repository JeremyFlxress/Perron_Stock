import logo from './logo.svg';
import './App.css';
import './index.css';
import React from 'react';
import LoginInterface from './componentes/InterfaceLogin';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <p>Darwin y Edgar</p>
       <LoginInterface></LoginInterface>
     
      
      </header>
    </div>
  );
}

export default App;
