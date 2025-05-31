import React from 'react';
import './App.css';
import Header from './component/header';
import House from './component/house'

function App() {
    let a = 'Rathore';
  return (
    <div className="App">
     <Header name = "sangeeta" age = "23" />
     <Header name = {a} />
     <Header name = "nayan" />
     <House/>
    </div>
  );
}


export default App;
