import {Grid, IconButton, Snackbar, SnackbarContent} from "@material-ui/core";
import styled from 'styled-components';
import TopHeader from "./TopHeader";
import ShowFlag from "./ShowFlag";
import AnswerField from "./AnswerField";
import ChooseRows from "./ChooseRows";
import StageCards from "./StageCards";
import {useState} from "react";
import useStateFromLS from "./useStateFromLS";
import {continentsDefaultData} from "./gameData";
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
                return (
                    <>
                        <TopHeader/>
                        <ShowFlag />
                        <AnswerField />
                        <ChooseRows />
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
        <Grid container onClick={() => setCoins(Math.random())}>
            <StyledGridItem item xs={12} >
                {renderMainBoard()}
            </StyledGridItem>
        </Grid>
    );
}

export default MainBoard;