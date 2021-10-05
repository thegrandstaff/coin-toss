import React from 'react';

//Components
import CoinCall from './Components/CoinCall';
import CoinFlip from './Components/CoinFlip';


function App() {
  return (
    <div>
      <h1>HEADS or TAILS?</h1>
      <CoinFlip/>
      <CoinCall/>
    </div>
  );
}

export default App;
