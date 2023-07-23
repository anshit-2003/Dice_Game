import { useState } from "react";
import "./heading.css";
import { getrolls } from "./utils.js";
import Dice from "./Dice";

export default function LuckyN({ message = "", numDice = 2, winner }) {
    const [dice, setDice] = useState(getrolls(numDice));
    const isWinner = winner(dice);
    const reRoll = () => setDice(getrolls(numDice));
    return (
        <main>
            <h1 className="heading">Lucky Game</h1>
            <h2>{isWinner && "You Win!"}</h2>
            <Dice values={dice} color={isWinner ? "palegreen" : "White"} />
            <button
                className={isWinner && "disabled"}
                disabled={isWinner}
                onClick={reRoll}>
                Roll Again!
            </button>
            <div>
                <button
                    className={!isWinner && "disabled"}
                    disabled={!isWinner}
                    onClick={reRoll}>
                    Reset!
                </button>
            </div>
            <h3>Note : {message}</h3>
        </main>
    );
}
