import { useState } from "react";
import "./heading.css"
import { getrolls, sum } from "./utils.js";
import Dice from "./Dice";

export default function LuckyN({ numDice = 2, target = 7 }) {
    const [dice, setDice] = useState(getrolls(numDice));
    const isWinner = sum(dice) === target;
    const reRoll = () => setDice(getrolls(numDice));
    return (
        <main>
            <h1 className="heading">Lucky {target} Game</h1>
            <h2>{isWinner && "You Win!"}</h2>
            <Dice values={dice} color={isWinner ? "palegreen" : "White"} />
            <button onClick={reRoll}>Roll Again!</button>
        </main>
    );
}
