import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Grid} from "@material-ui/core";
import createHomeCards from "../home/createHomeCards";
import CreateBaccalcBtns from "../baccalc/CreateBaccalcBtns";
import StyledContainer from "./StyledContainer";
import CreateBaccalcForm from "../baccalc/CreateBaccalcForm";
import MainBoard from "../guessflags/MainBoard";

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
                        {CreateBaccalcBtns()}
                    </Grid>
                </StyledContainer>
            </Route>

            <Route path='/baccalc/:section' exact>
                <StyledContainer>
                    <CreateBaccalcForm/>
                </StyledContainer>
            </Route>

            <Route path='/guessflags' exact>
                <MainBoard path='/guessflags'/>
            </Route>

            <Route path='/guessflags/:continent' exact>
                <MainBoard path='/guessflags/continent'/>
            </Route>
        </Switch>
    );
}

export default Routing;