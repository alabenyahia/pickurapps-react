import React from "react"
import MainBoard from "./MainBoard";
import {GameData} from "./gameData";
import Panel from "./Panel";
import styled from "styled-components";
import shuffle from "lodash/shuffle";

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
`;

const StyledPanelsDiv = styled.div`
  flex-basis: 30%;

`;



class GameMain extends React.Component{
    constructor(props) {
        super(props);
        this.gameData = new GameData();
    }

    render() {
        return (
            <MainBoard>
                <StyledDiv>
                    <StyledPanelsDiv>
                        <Panel panelItems={this.gameData.boxes.slice(0, 12)} left={false}/>
                    </StyledPanelsDiv>

                    <StyledPanelsDiv>
                        <Panel panelItems={this.gameData.boxes.slice(12, 24)} left={true}/>
                    </StyledPanelsDiv>
                </StyledDiv>
            </MainBoard>
        );
    }
}

export default GameMain;