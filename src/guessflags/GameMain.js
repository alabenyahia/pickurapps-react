import MainBoard from "./MainBoard";
import TopHeader from "./TopHeader";
import ShowFlag from "./ShowFlag";
import {contDB} from "./gameData";
import AnswerField from "./AnswerField";
import ChooseRows from "./ChooseRows";
import {IconButton, Snackbar, SnackbarContent} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ShowError from "./ShowError";
import {useParams} from "react-router-dom";
import {useRef, useState} from "react";
import useStateFromLS from "./useStateFromLS";
import shuffle from "lodash/shuffle";


function GameMain(props) {
    const [showAnswIncoToast, setShowAnswIncoToast] = useState(false);
    const [answText, setAnswText] = useState("");

    const [coins, setCoins] = useStateFromLS(80, 'guessflags-coins');
    let {continent} = useParams();
    const contDBCopy = useRef({...contDB});
    let shouldRandomize = useRef(true);

    function randomizeDB() {
        console.log('copy',contDBCopy)
        for (let prop in contDBCopy.current) {
            for (let i=0; i<contDBCopy.current[prop].flags.length; i++) {
                contDBCopy.current[prop].flags[i].randChars = shuffle(contDBCopy.current[prop].flags[i].randChars);
            }
        }
    }

    const handleOnNextFlagClick = () => {
        if (continent && props.contData[continent].currFlagNum < 10) {
            let oldObj = {...props.contData}
            oldObj[continent].currFlagNum++;
            props.setContData(oldObj);
        } else {
            let oldData = {...props.contData};
            switch (continent) {
                case 'sa':
                    oldData.na.isLocked = false;
                    props.setContData(oldData);
                    break;
                case 'na':
                    oldData.eur.isLocked = false;
                    props.setContData(oldData);
                    break;
                case 'eur':
                    oldData.asi.isLocked = false;
                    props.setContData(oldData);
                    break;
                case 'asi':
                    oldData.afr.isLocked = false;
                    props.setContData(oldData);
                    break;
                default :
                    oldData.sa.isLocked = false;
                    props.setContData(oldData);
            }
        }
    };

    const handleChooseBtnClick = (char) => {
        let oldText = answText;
        oldText+=char;
        setAnswText(oldText);
        console.log("OLD",answText);
    }


    function renderMain() {
        if (continent && (props.contData.hasOwnProperty(continent)) && (!props.contData[continent].isLocked)) {
            if (shouldRandomize.current) {
                randomizeDB();
                shouldRandomize.current = false;
            }
            return (
                <>
                    <TopHeader coins={coins} currFlagNum={props.contData[continent].currFlagNum}/>
                    <ShowFlag imgSrc={contDBCopy.current[continent].flags[props.contData[continent].currFlagNum-1].imgSrc} handleOnNextFlagClick={handleOnNextFlagClick}/>
                    <AnswerField text={answText}/>
                    <ChooseRows charArr={contDBCopy.current[continent].flags[props.contData[continent].currFlagNum-1].randChars}
                                handleChooseBtnClick={handleChooseBtnClick}/>

                    <Snackbar
                        open={showAnswIncoToast}
                        autoHideDuration={3000}
                        onClose={(e, r) => r === 'clickaway' ? false : setShowAnswIncoToast(false)}
                    >
                        <SnackbarContent
                            message="INCORRECT ANSWER, TRY AGAIN!"
                            style={{backgroundColor: '#ff4444'}}
                            action={
                                <IconButton size="small" aria-label="close" color="inherit"
                                            onClick={(e, r) => r === 'clickaway' ? false : setShowAnswIncoToast(false) }>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            }/>
                    </Snackbar>
                </>
            );
        } else {
            return (
                <ShowError />
            );
        }
    }

    return (
        <MainBoard>
            {renderMain()}
        </MainBoard>
    );
}

export default GameMain;