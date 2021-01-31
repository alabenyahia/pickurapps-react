import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomeCard from "./HomeCard";
import homeCardsData from "./homeCardsData";
import {Grid} from "@material-ui/core";

function Routing(props) {

    function createHomeCards() {
        const homeCards = [];
        for(let i=0; i<homeCardsData.length; i++) {
            let card = (
                <Grid item xs={12} sm={6} lg={4}>
                    <HomeCard {...homeCardsData[i]}/>
                </Grid>
            );
            homeCards.push(card);
        }
        return homeCards;
    }
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