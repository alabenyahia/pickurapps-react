import MainBoard from "./MainBoard";
import StageCards from "./StageCards";
import {IconButton, Snackbar, SnackbarContent} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import {useState} from "react";


function GameChooseCont(props) {
    const [showContLockedToast, setShowContLockedToast] = useState(false);

    return (
        <MainBoard>
            <StageCards contData={props.contData} handleContCardClick={(isLocked)=> isLocked ? setShowContLockedToast(true) : setShowContLockedToast(false)}/>

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
        </MainBoard>
    );
}

export default GameChooseCont;