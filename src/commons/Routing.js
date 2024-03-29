import React from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import {Grid} from "@material-ui/core";
import createHomeCards from "../home/createHomeCards";
import CreateBaccalcBtns from "../baccalc/CreateBaccalcBtns";
import StyledContainer from "./StyledContainer";
import CreateBaccalcForm from "../baccalc/CreateBaccalcForm";
import GFGame from "../guessflags/Game";
import DMGame from "../dlilekmlak/Game"
import ShowWinnings from "../dlilekmlak/ShowWinnings";
import {AnimatePresence} from "framer-motion";
import ContactForm from "../contact/ContactForm";
import {Helmet} from "react-helmet";

function Routing() {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
            <Route path='/dlilekmlak/game'>
                <DMGame path='/dlilekmlak/game'/>
            </Route>

            <Route path='/dlilekmlak/wins' >
                <ShowWinnings/>
            </Route>

            <Route path='/dlilekmlak'>
                <DMGame path='/dlilekmlak'/>
            </Route>

            <Route path='/guessflags/:continent'>
                <GFGame path='/guessflags/continent'/>
            </Route>

            <Route path='/guessflags'>
                <GFGame path='/guessflags'/>
            </Route>

            <Route path='/baccalc/:section'>
                <StyledContainer>
                    <Helmet>
                        <title>Bac Tunisie Calcul (moyenne & score) | pickurapps</title>
                    </Helmet>
                    <CreateBaccalcForm/>
                </StyledContainer>
            </Route>

            <Route path='/baccalc'>
                <StyledContainer>
                    <Helmet>
                        <title>Bac Tunisie Calcul (moyenne & score) | pickurapps</title>
                    </Helmet>
                    <Grid container spacing={3}>
                        {CreateBaccalcBtns()}
                    </Grid>
                </StyledContainer>
            </Route>

            <Route path='/contact'>
                <StyledContainer>
                    <Helmet>
                        <title>Contact | pickurapps</title>
                    </Helmet>
                    <ContactForm />
                </StyledContainer>
            </Route>

            <Route path='/'>
                <StyledContainer>
                    <Helmet>
                        <title>Home | pickurapps</title>
                    </Helmet>
                    <Grid container spacing={3}>
                        {createHomeCards()}
                    </Grid>
                </StyledContainer>
            </Route>

        </Switch>
        </AnimatePresence>
    );
}

export default Routing;