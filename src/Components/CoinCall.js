import { useState } from "react";

import './CoinCall.css';

//images
import heads from "../Images/heads.png";
import tails from "../Images/tails.png";
import spin from "../Images/coin-flip.gif";

const CoinCall = () => {
    const [score, setScore] = useState(0);
    const [showHeads, setShowHeads] = useState(false);
    const [showTails, setShowTails] = useState(false);
    const [showFlip, setShowFlip] = useState(true);

    const HeadsOrTails = () => {
        setShowFlip(false);

        let randomNum = Math.floor(Math.random() * 100) + 1;

        if (randomNum >= 1 && randomNum <= 50) {
            console.log(`line 19: rng: ${randomNum}`);
            setShowHeads(true);
            setShowTails(false);
            return "heads";
        }
        else {
            console.log(`line 26: rng: ${randomNum}`);
            setShowTails(true);
            setShowHeads(false);
            return "tails";
        }
    }

    const callHeadsHandler = () => {
        console.log(`You selected heads`);
        if (HeadsOrTails() === "heads") {
            setScore(prevScore => prevScore + 1);
        }
        else {
            setScore(0);
        }
    }

    const callTailsHandler = () => {
        console.log(`You selected tails`);
        if (HeadsOrTails() === "tails") {
            setScore(prevScore => prevScore + 1);
        }
        else {
            setScore(0);
        }
    }

    return (
        <div>
            {showFlip ? <img src={spin} alt="" /> : null}
            {showHeads ? <img src={heads} alt="" /> : null}
            {showTails ? <img src={tails} alt="" /> : null}
            <h2>Score: {score}</h2>
            <h3>Pick a side</h3>
            <button onClick={callHeadsHandler}>HEADS</button>
            <button onClick={callTailsHandler}>TAILS</button>
        </div>
    );
}

export default CoinCall;