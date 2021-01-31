import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Grid} from "@material-ui/core";
import createHomeCards from "../home/createHomeCards";

function Routing() {
    return (
        <Switch>
            <Route path='/' exact>
                <Grid container spacing={3}>
                    {createHomeCards()}
                </Grid>
            </Route>
        </Switch>
    );
}

export default Routing;