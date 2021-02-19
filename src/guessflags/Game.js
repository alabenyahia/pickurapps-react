import useStateFromLS from "./useStateFromLS";
import {continentsDefaultData} from "./gameData";
import GameChooseCont from "./GameChooseCont";
import GameMain from "./GameMain";
import {motion} from "framer-motion";
import {containerVariants} from "../commons/routingAnimation";

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
        <motion.div
            variants={containerVariants}
            initial="out"
            animate="in"
            exit="out">
            {renderGame()}
        </motion.div>
    )
}

export default Game;