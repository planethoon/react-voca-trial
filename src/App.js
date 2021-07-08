import React, {useState} from 'react';
import './App.css';
import Hello from './component/Hello'


function App() {
  return (
    <div className="App">
      <h1>APP level h1</h1>
      <Hello age={10} job='dev' />      
      <Hello age={20} job='dev' />      
      <Hello age={30} job='dev' />      
    </div>
  )
}

export default App;
      
