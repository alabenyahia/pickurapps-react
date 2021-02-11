import MainBoard from "./MainBoard";
import GameMenu from "./GameMenu";


function Game(props) {

    function renderGame() {
        if (props.path === 'dlilekmlak') {
            return (
                <GameMenu />
            );
        } else {
            return (
                <GameMenu />
            );
        }
    }

    return (
        renderGame()
    );
}

export default Game;