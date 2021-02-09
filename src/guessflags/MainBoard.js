import {Grid, IconButton, Snackbar, SnackbarContent} from "@material-ui/core";
import styled from 'styled-components';
import TopHeader from "./TopHeader";
import ShowFlag from "./ShowFlag";
import AnswerField from "./AnswerField";
import ChooseRows from "./ChooseRows";
import StageCards from "./StageCards";
import {useState} from "react";
import useStateFromLS from "./useStateFromLS";
import {Africa, continentsDefaultData, Europe, NorthAmerica, SouthAmerica, Asia} from "./gameData";
import CloseIcon from "@material-ui/icons/Close";
import {useParams} from "react-router-dom";
import ShowError from "./ShowError";


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
    console.log(coins, contData);
    let {continent} = useParams();

    const handleToastClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setShowContLockedToast(false);
    };

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

    function renderMainBoard() {
        console.log("cont", continent);
        if (props.path === '/guessflags')
            return (
                <>
                    <StageCards contData={contData} handleContCardClick={(isLocked)=> isLocked ? setShowContLockedToast(true) : setShowContLockedToast(false)}/>
                    {
                        showContLockedToast &&
                        <Snackbar
                            open={showContLockedToast}
                            autoHideDuration={3000}
                            onClose={handleToastClose}

                        >
                            <SnackbarContent
                                message="Complete previous continents to unlock this!"
                                style={{backgroundColor: '#ff4444'}}
                                action={
                                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleToastClose}>
                                        <CloseIcon fontSize="small" />
                                    </IconButton>
                                }/>
                        </Snackbar>
                    }

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
                        <AnswerField />
                        <ChooseRows charArr={currContObj.flags[contData[continent].currFlagNum-1].randomChars}/>
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