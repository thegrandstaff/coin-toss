import { useState } from "react"

import './CoinCall.css'

const CoinCall = () => {
    const [score, setScore] = useState(0);
    const [coin, setCoin] = useState("heads");
    const [message, setMessage] = useState("Pick a side");

    const GenerateRandomNumber = () => {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        console.log('Random number generated: ' + randomNum);

        if (randomNum >= 1 && randomNum <= 50)
        {
            setCoin("heads");
            setMessage(`Coin is ${coin}`);
        }
        else 
        {
            setCoin("tails");
            setMessage(`Coin is ${coin}`);
        }
    }

    const callHeadsHandler = () => {
        GenerateRandomNumber();
        if (coin === "heads")
        {
            setScore(prevScore => prevScore + 1);
        }
        else 
        {
            setScore(0);
        }
    }
    
    const callTailsHandler = () => {
        GenerateRandomNumber();
        if (coin === "tails")
        {
            setScore(prevScore => prevScore + 1);
        }
        else 
        {
            setScore(0);
        }
    }

    return (
        <div>
            <h2>Score: {score}</h2>
            <h3>{message}</h3>
            <button onClick={callHeadsHandler}>HEADS</button>
            <button onClick={callTailsHandler}>TAILS</button>
        </div>
    );
}

export default CoinCall;