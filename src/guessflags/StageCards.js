import {Grid} from "@material-ui/core";
import StageCard from "./StageCard";


function StageCards() {

    return (
        <Grid container spacing={3} style={{width: '100%', margin: 0, padding: '12px'}}>
            <Grid item xs={6}>
                <StageCard to='/guessflags/sa' name='South America'/>
            </Grid>
            <Grid item xs={6}>
                <StageCard to='/guessflags/na' name='North America'/>
            </Grid>
            <Grid item xs={6}>
                <StageCard to='/guessflags/eur' name='Europe'/>
            </Grid>
            <Grid item xs={6}>
                <StageCard to='/guessflags/asi' name='Asia'/>
            </Grid>
            <Grid item xs={6}>
                <StageCard to='/guessflags/afr' name='Africa'/>
            </Grid>
        </Grid>
    );
}

export default StageCards;