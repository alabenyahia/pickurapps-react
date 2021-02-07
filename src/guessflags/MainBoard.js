import {Grid} from "@material-ui/core";
import styled from 'styled-components';
import TopHeader from "./TopHeader";
import ShowFlag from "./ShowFlag";
import AnswerField from "./AnswerField";
import ChooseRows from "./ChooseRows";
import StageCards from "./StageCards";
import {useEffect} from "react";

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

    useEffect(() => {
/*        let contData;
        if (localStorage.getItem('guess10flags-coins') === null) {
            localStorage.setItem('guess10flags-coins', '80');
        }

        if (localStorage.getItem('guess10flags-contdata') === null) {
            contData = {
                sa: {
                    isLocked: false,
                    currFlagNum: 1
                },
                na: {
                    isLocked: true,
                    currFlagNum: 1
                },
                eur: {
                    isLocked: true,
                    currFlagNum: 1
                },
                asi: {
                    isLocked: true,
                    currFlagNum: 1
                },
                afr: {
                    isLocked: true,
                    currFlagNum: 1
                }
            };
            localStorage.setItem('guess10flags-contdata', JSON.stringify(contData));
        } else {
            contData = JSON.parse(localStorage.getItem('guess10flags-contdata'));
        }*/
        console.log("FIIIIIIIREEEED");
    }, [])

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
        <Grid container>
            <StyledGridItem item xs={12} >
                {renderMainBoard()}
            </StyledGridItem>
        </Grid>
    );
}

export default MainBoard;