import React from "react"
import MainBoard from "./MainBoard";
import {GameData} from "./gameData";
import Panel from "./Panel";
import styled from "styled-components";
import shuffle from "lodash/shuffle";
import BoxesHolder from "./BoxesHolder";

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const StyledPanelsDiv = styled.div`
  flex-basis: 16.6666666667%;

`;

const StyledCenterDiv = styled.div`
  flex-basis: 66.6666666667%;
`;





class GameMain extends React.Component{
    constructor(props) {
        super(props);

        const gameData = new GameData();
        this.state = {boxes: gameData.boxes, shuffledBoxes: gameData.shuffledBoxes};
    }

    render() {
        return (
            <MainBoard>
                <StyledDiv>
                    <StyledPanelsDiv>
                        <Panel panelItems={this.state.boxes.slice(0, 12)} left={false}/>
                    </StyledPanelsDiv>

                    <StyledCenterDiv>
                        <BoxesHolder boxes={this.state.shuffledBoxes}/>
                    </StyledCenterDiv>

                    <StyledPanelsDiv>
                        <Panel panelItems={this.state.boxes.slice(12, 24)} left={true}/>
                    </StyledPanelsDiv>
                </StyledDiv>
            </MainBoard>
        );
    }
}

export default GameMain;