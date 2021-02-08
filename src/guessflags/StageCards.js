import {Grid} from "@material-ui/core";
import StageCard from "./StageCard";


function StageCards(props) {

    return (
        <Grid container spacing={3} style={{width: '100%', margin: 0, padding: '12px'}}>
            <Grid item xs={6}>
                <StageCard handleContCardClick={props.handleContCardClick} isLocked={props.contData.sa.isLocked} to='/guessflags/sa' name='South America'/>
            </Grid>
            <Grid item xs={6}>
                <StageCard handleContCardClick={props.handleContCardClick} isLocked={props.contData.na.isLocked} to='/guessflags/na' name='North America'/>
            </Grid>
            <Grid item xs={6}>
                <StageCard handleContCardClick={props.handleContCardClick} isLocked={props.contData.eur.isLocked} to='/guessflags/eur' name='Europe'/>
            </Grid>
            <Grid item xs={6}>
                <StageCard handleContCardClick={props.handleContCardClick} isLocked={props.contData.asi.isLocked} to='/guessflags/asi' name='Asia'/>
            </Grid>
            <Grid item xs={6}>
                <StageCard handleContCardClick={props.handleContCardClick} isLocked={props.contData.afr.isLocked} to='/guessflags/afr' name='Africa'/>
            </Grid>
        </Grid>
    );
}

export default StageCards;