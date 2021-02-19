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
import { useHistory } from "react-router-dom";
import ContCompletedMsg from "./ContCompletedMsg";



function GameMain(props) {
    const [showAnswIncoToast, setShowAnswIncoToast] = useState(false);
    const [answText, setAnswText] = useState("");
    const [resetVisibility, setResetVisibility] = useState(false);
    const [coins, setCoins] = useStateFromLS(80, 'guessflags-coins');
    let {continent} = useParams();
    const contDBCopy = useRef({...contDB});
    let shouldRandomize = useRef(true);
    const history = useHistory();
    const MySwal = useRef(withReactContent(Swal));


    useEffect(() => {
        if (answText.length > 0){
            let corrAnsw = contDBCopy.current[continent].flags[props.contData[continent].currFlagNum-1].corrAnsw;
            if (corrAnsw && answText.length === corrAnsw.length) {
                if (answText === corrAnsw.join("")) {
                    setResetVisibility(true);
                    setCoins(coins+answText.length);
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
                        contCompleted();
                    }
                }
            } else if (corrAnsw && answText.length > corrAnsw.length) {
                setAnswText("");
                setResetVisibility(true);
                setShowAnswIncoToast(true);
            }
        }
    },[answText]);

    function contCompleted() {
        unlockNextCont();
        let oldObj = {...props.contData};
        oldObj[continent].isCompleted = true;
        props.setContData(oldObj);
        MySwal.current.fire({
            html: <WinningSwal num={answText.length} type='next_cont'/>,
            padding: '1rem',
            confirmButtonColor: '#f6c358',
            confirmButtonText: 'BACK TO CONTINENTS',
            allowEscapeKey: false,
            allowOutsideClick: false,
            background: '#7D5A5A'
        }).then(() => {
            if (history)
                history.push('/guessflags');
        });
    }

    function randomizeDB() {
        console.log('copy',contDBCopy)
        for (let prop in contDBCopy.current) {
            for (let i=0; i<contDBCopy.current[prop].flags.length; i++) {
                contDBCopy.current[prop].flags[i].randChars = shuffle(contDBCopy.current[prop].flags[i].randChars);
            }
        }
    }

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

    const handleOnNextFlagClick = () => {
        setAnswText("");
        setResetVisibility(true);
        if (continent && props.contData[continent].currFlagNum < 10) {
            let oldObj = {...props.contData}
            oldObj[continent].currFlagNum++;
            props.setContData(oldObj);
        } else {
            contCompleted();
        }
    };

    const handleChooseBtnClick = (char) => {
        console.log('fireeed');
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
            if (props.contData[continent].isCompleted) {
                return (
                    <ContCompletedMsg contData={props.contData} setContData={props.setContData}/>
                );
            } else {
                return (
                    <>
                        <TopHeader coins={coins} currFlagNum={props.contData[continent].currFlagNum}/>
                        <ShowFlag imgSrc={contDBCopy.current[continent].flags[props.contData[continent].currFlagNum-1].imgSrc} handleOnNextFlagClick={handleOnNextFlagClick}/>
                        <AnswerField setAnswText={setAnswText} text={answText} setResetVisibility={setResetVisibility}/>
                        <ChooseRows charArr={contDBCopy.current[continent].flags[props.contData[continent].currFlagNum-1].randChars}
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
                                                onClick={(e, r) => r === 'clickaway' ? false : setShowAnswIncoToast(false) }>
                                        <CloseIcon fontSize="small" />
                                    </IconButton>
                                }/>
                        </Snackbar>
                    </>
                );
            }

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