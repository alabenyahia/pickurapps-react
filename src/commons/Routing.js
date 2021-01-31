import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Grid} from "@material-ui/core";
import createHomeCards from "../home/createHomeCards";
import createBacCalcBtns from "../baccalc/createBacCalcBtns";
import StyledContainer from "./StyledContainer";

function Routing() {
    return (
        <Switch>
            <Route path='/' exact>
                <StyledContainer>
                    <Grid container spacing={3}>
                        {createHomeCards()}
                    </Grid>
                </StyledContainer>

            </Route>

            <Route path='/baccalc' exact>
                <StyledContainer>
                    <Grid container spacing={3}>
                        {createBacCalcBtns()}
                    </Grid>
                </StyledContainer>
            </Route>
        </Switch>
    );
}

export default Routing;