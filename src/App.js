import React from 'react';
import './App.css';
import Header from './component/header';
import House from './component/house';
import Arrow from './component/Arrow';


function App() {
    let a = 'Rathore';
  return (
    <div className="App">
     {/* <Header name = "sangeeta" age = "23" />
     <Header name = {a} />
     <Header name = "nayan" />
     <House/> */}

      <Arrow name ="sangeeta"/>
    </div>
  );

  
}


export default App;
