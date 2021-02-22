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
import {useEffect, useRef, useState} from "react";
import useStateFromLS from "./useStateFromLS";
import shuffle from "lodash/shuffle";
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";
import WinningSwal from "./WinningSwal";
import {useHistory} from "react-router-dom";
import ContCompletedMsg from "./ContCompletedMsg";
import Confetti from "react-confetti";
import {Helmet} from "react-helmet";


function GameMain(props) {
    const [showAnswIncoToast, setShowAnswIncoToast] = useState(false);
    const [answText, setAnswText] = useState("");
    const [resetVisibility, setResetVisibility] = useState(false);
    const [coins, setCoins] = useStateFromLS(80, 'guessflags-coins');
    const [coinsToast, setCoinsToast] = useState(false);
    const [isConfettiOpen, setIsConfettiOpen] = useState(false);
    let {continent} = useParams();
    const contDBCopy = useRef({...contDB});
    let shouldRandomize = useRef(true);
    const history = useHistory();
    const MySwal = useRef(withReactContent(Swal));


    // check if the answer is correct or false (run each time user answer text change)
    useEffect(() => {
        if (answText.length > 0) {
            let corrAnsw = contDBCopy.current[continent].flags[props.contData[continent].currFlagNum - 1].corrAnsw;
            // run if anwer is correct
            if (corrAnsw && answText.length === corrAnsw.length) {
                if (answText === corrAnsw.join("")) {
                    setResetVisibility(true);
                    setCoins(coins + answText.length);
                    // run if continent still not complete
                    if (props.contData[continent].currFlagNum < 10) {
                        MySwal.current.fire({
                            html: <WinningSwal num={answText.length} type='next_flag'/>,
                            padding: '1rem',
                            confirmButtonColor: '#f6c358',
                            confirmButtonText: 'NEXT FLAG',
                            allowEscapeKey: false,
                            allowOutsideClick: false,
                            background: '#7D5A5A'
                        }).then(() => {
                            setAnswText("");
                            let oldObj = {...props.contData};
                            oldObj[continent].currFlagNum++;
                            props.setContData(oldObj);
                        });
                    } else {
                        // run if player has completed the contienent
                        // (if he guessed the last flag in that particular continent)
                        contCompleted();
                    }
                }
                // run if answer is incorrect
            } else if (corrAnsw && answText.length > corrAnsw.length) {
                // reset answer text & btns visibility & show incorrect toast
                setAnswText("");
                setResetVisibility(true);
                setShowAnswIncoToast(true);
            }
        }
    }, [answText]);

    // runs when the player has completed the last flag of a particular continent
    function contCompleted() {
        unlockNextCont();
        let oldObj = {...props.contData};
        oldObj[continent].isCompleted = true;
        props.setContData(oldObj);
        setIsConfettiOpen(true);
        window.document.getElementById('root').scrollIntoView();
        MySwal.current.fire({
            html: <WinningSwal num={answText.length} type='next_cont'/>,
            padding: '1rem',
            confirmButtonColor: '#f6c358',
            confirmButtonText: 'BACK TO CONTINENTS',
            allowEscapeKey: false,
            allowOutsideClick: false,
            background: '#7D5A5A'
        }).then(() => {
            setIsConfettiOpen(false);
            if (history)
                history.push('/guessflags');
        });
    }

    // shuffle choose from buttons
    function randomizeDB() {
        for (let prop in contDBCopy.current) {
            for (let i = 0; i < contDBCopy.current[prop].flags.length; i++) {
                contDBCopy.current[prop].flags[i].randChars = shuffle(contDBCopy.current[prop].flags[i].randChars);
            }
        }
    }

    // unlock next continent when previous is completed
    function unlockNextCont() {
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

    // fire when next flag button is clicked
    const handleOnNextFlagClick = () => {
        // if player has not enough coins show a toast error message
        if (coins >= 20) {
            setCoins((prev) => prev - 20);
            setAnswText("");
            setResetVisibility(true);
            if (continent && props.contData[continent].currFlagNum < 10) {
                let oldObj = {...props.contData}
                oldObj[continent].currFlagNum++;
                props.setContData(oldObj);
            } else {

                contCompleted();
            }
        } else {
            setCoinsToast(true);
        }
    };

    // fire when choose from button is clicked
    const handleChooseBtnClick = (char) => {
        // add button's text to current player's answer text
        let oldText = answText;
        oldText += char;
        setAnswText(oldText);
    }


    function renderMain() {
        // show error if player visits a locked continent or invalid url
        if (continent && (props.contData.hasOwnProperty(continent)) && (!props.contData[continent].isLocked)) {
            if (shouldRandomize.current) {
                randomizeDB();
                shouldRandomize.current = false;
            }
            if (props.contData[continent].isCompleted) {
                return (
                    <ContCompletedMsg contData={props.contData} setContData={props.setContData}/>
                );
            } else {
                return (
                    <>
                        <Helmet>
                            <title>Guess Flags Game | pickurapps</title>
                        </Helmet>
                        <TopHeader coins={coins} currFlagNum={props.contData[continent].currFlagNum}/>
                        <ShowFlag
                            imgSrc={contDBCopy.current[continent].flags[props.contData[continent].currFlagNum - 1].imgSrc}
                            handleOnNextFlagClick={handleOnNextFlagClick}/>
                        <AnswerField setAnswText={setAnswText} text={answText} setResetVisibility={setResetVisibility}/>
                        <ChooseRows
                            charArr={contDBCopy.current[continent].flags[props.contData[continent].currFlagNum - 1].randChars}
                            handleChooseBtnClick={handleChooseBtnClick} resetVisibility={resetVisibility}
                            setResetVisibility={setResetVisibility}/>

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
                                                onClick={(e, r) => r === 'clickaway' ? false : setShowAnswIncoToast(false)}>
                                        <CloseIcon fontSize="small"/>
                                    </IconButton>
                                }/>
                        </Snackbar>

                        <Snackbar
                            open={coinsToast}
                            autoHideDuration={3000}
                            onClose={(e, r) => r === 'clickaway' ? false : setCoinsToast(false)}
                        >
                            <SnackbarContent
                                message="NOT ENOUGH COINS !"
                                style={{backgroundColor: '#ff4444'}}
                                action={
                                    <IconButton size="small" aria-label="close" color="inherit"
                                                onClick={(e, r) => r === 'clickaway' ? false : setCoinsToast(false)}>
                                        <CloseIcon fontSize="small"/>
                                    </IconButton>
                                }/>
                        </Snackbar>

                    </>
                );
            }

        } else {
            return (
                <ShowError/>
            );
        }
    }

    return (
        <MainBoard>
            {renderMain()}
            {
                isConfettiOpen && <Confetti/>
            }
        </MainBoard>
    );
}

export default GameMain;