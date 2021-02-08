import {Grid} from "@material-ui/core";
import styled from 'styled-components';
import TopHeader from "./TopHeader";
import ShowFlag from "./ShowFlag";
import AnswerField from "./AnswerField";
import ChooseRows from "./ChooseRows";
import StageCards from "./StageCards";
import {useState} from "react";
import useStateFromLS from "./useStateFromLS";
import {continentsDefaultData} from "./gameData";

const StyledGridItem = styled(Grid)`
    max-width: 600px;
    margin: 16px auto;
    background: linear-gradient(0deg, #faaca8 0%, #ddd6f3 100%);
    height: calc(100vh - (64px + 32px));
    border-radius: 4px;
    overflow: auto;
    box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%);
  
    @media screen and (max-width: 960px){
      max-width: 500px;
    }
  
    @media screen and (max-width: 600px) {
      height: calc(100vh - (56px + 32px));
    }
`;

function MainBoard(props) {
    const [coins, setCoins] = useStateFromLS(80, 'guessflags-coins');
    const [contData, setContData] = useStateFromLS(continentsDefaultData, 'guessflags-contdata');

    console.log(coins, contData);

    function renderMainBoard() {
        if (props.path === '/guessflags')
            return (
                <StageCards />
            );
        else
            return (
                <>
                    <TopHeader/>
                    <ShowFlag />
                    <AnswerField />
                    <ChooseRows />
                </>
            );
    }

    return (
        <Grid container onClick={() => setCoins(Math.random())}>
            <StyledGridItem item xs={12} >
                {renderMainBoard()}
            </StyledGridItem>
        </Grid>
    );
}

export default MainBoard;