import {Grid} from "@material-ui/core";
import StageCard from "./StageCard";


function StageCards() {

    return (
        <Grid container spacing={3} style={{width: '100%', margin: 0, padding: '12px'}}>
            <Grid item xs={6}>
                <StageCard />
            </Grid>
            <Grid item xs={6}>
                <StageCard />
            </Grid>
            <Grid item xs={6}>
                <StageCard />
            </Grid>
            <Grid item xs={6}>
                <StageCard />
            </Grid>
            <Grid item xs={6}>
                <StageCard />
            </Grid>
        </Grid>
    );
}

export default StageCards;