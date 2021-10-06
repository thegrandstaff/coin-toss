import React from 'react';

import './App.css';

//Components
import CoinCall from './Components/CoinCall';
import Footer from './Components/Footer';

function App() {
  return (
    <div className = "App">
      <h1>HEADS or TAILS?</h1>
      <CoinCall/>
      <Footer/>
    </div>
  );
}

export default App;
