import GameMenu from "./GameMenu";
import GameMain from "./GameMain";
import {useHistory} from "react-router-dom";
import {motion} from "framer-motion";
import MainBoard from "./MainBoard";

function Game(props) {
    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {delay: 0.5, duration: 0.5}
        },
        exit: {
            x: "-100vh",
            transition: {ease: 'easeInOut'}
        }
    };
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
        <MainBoard
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit">
            {renderGame()}
        </MainBoard>

    );
}

export default Game;