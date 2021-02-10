import useStateFromLS from "./useStateFromLS";
import {continentsDefaultData} from "./gameData";
import GameChooseCont from "./GameChooseCont";
import GameMain from "./GameMain";

function Game(props) {
    const [contData, setContData] = useStateFromLS(continentsDefaultData, 'guessflags-contdata');


    console.log("path=", props.path);

    function renderGame() {
        if (props.path === '/guessflags') {
            return (
                <GameChooseCont contData={contData}/>
            );
        } else {
            return (
                <GameMain contData={contData} setContData={setContData} />
            );
        }
    }

    return (
        <div>
            {renderGame()}
        </div>
    )
}

export default Game;