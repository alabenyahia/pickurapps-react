import {Grid, IconButton, Snackbar, SnackbarContent} from "@material-ui/core";
import styled from 'styled-components';
import TopHeader from "./TopHeader";
import ShowFlag from "./ShowFlag";
import AnswerField from "./AnswerField";
import ChooseRows from "./ChooseRows";
import StageCards from "./StageCards";
import {useEffect, useState} from "react";
import useStateFromLS from "./useStateFromLS";
import {Africa, continentsDefaultData, Europe, NorthAmerica, SouthAmerica, Asia} from "./gameData";
import CloseIcon from "@material-ui/icons/Close";
import {useParams} from "react-router-dom";
import ShowError from "./ShowError";
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";
import WinningSwal from "./WinningSwal";


const StyledGridItem = styled(Grid)`
    max-width: 600px;
    margin: 16px auto;
    background: linear-gradient(0deg, #faaca8 0%, #ddd6f3 100%);
    height: calc(100vh - (64px + 32px));
    border-radius: 4px;
    overflow: auto;
    box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%);
  
    @media screen and (max-width: 960px){
      max-width: 500px;
    }
  
    @media screen and (max-width: 600px) {
      height: calc(100vh - (56px + 32px));
    }
`;

function MainBoard(props) {
    let currContObj = null;
    const [coins, setCoins] = useStateFromLS(80, 'guessflags-coins');
    const [contData, setContData] = useStateFromLS(continentsDefaultData, 'guessflags-contdata');
    const [showContLockedToast, setShowContLockedToast] = useState(false);
    const [answText, setAnswText] = useState("");
    const [showAnswIncoToast, setShowAnswIncoToast] = useState(false);
    console.log(coins, contData);
    let {continent} = useParams();
    const MySwal = withReactContent(Swal);

    useEffect(() => {
        if (answText.length>0) {
            if (answText.length === currContObj.flags[contData[continent].currFlagNum-1].correctAnsw.length) {
                if (answText === currContObj.flags[contData[continent].currFlagNum-1].correctAnsw.join("")) {
                    MySwal.fire({
                        html: <WinningSwal num={answText.length}/>,
                        padding: '1rem',
                        confirmButtonColor: '#f6c358',
                        confirmButtonText: 'NEXT FLAG',
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                        background: '#7D5A5A'
                    }).then(() => setAnswText(""));
                }
            }

            else if (answText.length > currContObj.flags[contData[continent].currFlagNum-1].correctAnsw.length) {
                setShowAnswIncoToast(true);
                setAnswText("");
            }
        }

    }, [answText, MySwal, contData, continent])

    const handleOnNextFlagClick = () => {
      if (continent && contData[continent].currFlagNum < 10) {
          let oldObj = {...contData}
          oldObj[continent].currFlagNum++;
          setContData(oldObj);
      } else {
          let oldData = {...contData};
          switch (continent) {
              case 'sa':
                  oldData.na.isLocked = false;
                  setContData(oldData);
                  break;
              case 'na':
                  oldData.eur.isLocked = false;
                  setContData(oldData);
                  break;
              case 'eur':
                  oldData.asi.isLocked = false;
                  setContData(oldData);
                  break;
              case 'asi':
                  oldData.afr.isLocked = false;
                  setContData(oldData);
                  break;
              default :
                  oldData.sa.isLocked = false;
                  setContData(oldData);
          }
      }
    };

    const handleChooseBtnClick = (char) => {
        let oldText = answText;
        oldText+=char;
        setAnswText(oldText);
        console.log("OLD",answText);

        /*if (answText.length === currContObj.flags[contData[continent].currFlagNum-1].correctAnsw.length)
            if (answText === currContObj.flags[contData[continent].currFlagNum-1].correctAnsw.join("")) {
                MySwal.fire({
                    html: <WinningSwal num={answText.length}/>,
                    padding: '1rem',
                    confirmButtonColor: '#f6c358',
                    confirmButtonText: 'NEXT FLAG',
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    background: '#7D5A5A'
                });
            }

        else if (answText.length > currContObj.flags[contData[continent].currFlagNum-1].correctAnsw.length) {
            setShowAnswIncoToast(true);
            setAnswText("");
        }*/
    }

    function renderMainBoard() {
        console.log("cont", continent);
        if (props.path === '/guessflags')
            return (
                <>
                    <StageCards contData={contData} handleContCardClick={(isLocked)=> isLocked ? setShowContLockedToast(true) : setShowContLockedToast(false)}/>

                    <Snackbar
                        open={showContLockedToast}
                        autoHideDuration={3000}
                        onClose={(e, r) => r === 'clickaway' ? false : setShowContLockedToast(false)}

                    >
                        <SnackbarContent
                            message="Complete previous continents to unlock this!"
                            style={{backgroundColor: '#ff4444'}}
                            action={
                                <IconButton size="small" aria-label="close" color="inherit" onClick={(e, r) => r === 'clickaway' ? false : setShowContLockedToast(false)}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            }/>
                    </Snackbar>

                </>

            );
        else {
            if (continent && (contData.hasOwnProperty(continent)) && (!contData[continent].isLocked)) {
                switch (continent) {
                    case 'sa':
                        currContObj = new SouthAmerica();
                        break;
                    case 'na':
                        currContObj = new NorthAmerica();
                        break;
                    case 'eur':
                        currContObj = new Europe();
                        break;
                    case 'asi':
                        currContObj = new Asia();
                        break;
                    case 'afr':
                        currContObj = new Africa();
                        break;
                    default :
                        currContObj = new SouthAmerica();
                }

                return (
                    <>
                        <TopHeader coins={coins} currFlagNum={contData[continent].currFlagNum}/>
                        <ShowFlag imgSrc={currContObj.flags[contData[continent].currFlagNum-1].imgSrc} handleOnNextFlagClick={handleOnNextFlagClick}/>
                        <AnswerField text={answText}/>
                        <ChooseRows charArr={currContObj.flags[contData[continent].currFlagNum-1].randomChars}
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

    }

    return (
        <Grid container>
            <StyledGridItem item xs={12} >
                {renderMainBoard()}
            </StyledGridItem>
        </Grid>
    );
}

export default MainBoard;