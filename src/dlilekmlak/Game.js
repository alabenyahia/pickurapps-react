import GameMenu from "./GameMenu";
import GameMain from "./GameMain";
import {useHistory} from "react-router-dom";
import MainBoard from "./MainBoard";

function Game(props) {
    const history = useHistory()

    function renderGame() {
        if (props.path === '/dlilekmlak') {
            return (
                <GameMenu />
            );
        } else {
            return (
                <GameMain history={history}/>
            );
        }
    }

    return (
        <MainBoard>
            {renderGame()}
        </MainBoard>

    );
}

export default Game;