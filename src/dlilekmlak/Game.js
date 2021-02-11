import GameMenu from "./GameMenu";
import GameMain from "./GameMain";

function Game(props) {

    function renderGame() {
        if (props.path === '/dlilekmlak') {
            return (
                <GameMenu />
            );
        } else {
            return (
                <GameMain />
            );
        }
    }

    return (
        renderGame()
    );
}

export default Game;