import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Grid} from "@material-ui/core";
import createHomeCards from "../home/createHomeCards";
import createBacCalcBtns from "../baccalc/createBacCalcBtns";

function Routing() {
    return (
        <Switch>
            <Route path='/' exact>
                <Grid container spacing={3}>
                    {createHomeCards()}
                </Grid>
            </Route>

            <Route path='/baccalc' exact>
                <Grid container spacing={3}>
                    {createBacCalcBtns()}
                </Grid>
            </Route>
        </Switch>
    );
}

export default Routing;