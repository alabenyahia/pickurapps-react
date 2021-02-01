import homeCardsData from "./homeCardsData";
import {Grid} from "@material-ui/core";
import HomeCard from "./HomeCard";
import React from "react";

export default function createHomeCards() {
    const homeCards = [];
    for(let i=0; i<homeCardsData.length; i++) {
        let card = (
            <Grid item xs={12} sm={6} lg={4} key={i}>
                <HomeCard {...homeCardsData[i]}/>
            </Grid>
        );
        homeCards.push(card);
    }
    return homeCards;
}