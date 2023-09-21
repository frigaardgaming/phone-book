import logo from './logo.svg';
import './App.css';
import Form from './components/form';
import React from 'react';
import MyForm from './components/myForm';


function App() {
  const data = [
    
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Your App</h1>
        <MyForm />
      </header>
    </div>

  );
}

export default App;
