import "./App.css";
import { sum } from "./utils";
import "./LuckyN";
import LuckyN from "./LuckyN";
function App() {
    function isWinnerSame(arr) {
        return arr.every((v) => v === arr[0]);
    }
    return (
        <>
            <LuckyN
                message="All Three Should be Same!"
                numDice={3}
                winner={isWinnerSame}
            />
        </>
    );
}

export default App;
