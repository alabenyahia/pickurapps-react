import React from "react"
import MainBoard from "./MainBoard";
import {GameData} from "./gameData";
import Panel from "./Panel";
import styled from "styled-components";
import BoxesHolder from "./BoxesHolder";
import Box from "./Box";

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


const StyledMyBoxHolder = styled.div`
  flex-basis: 16.6666666667%;
  margin: 8px 24px;
`;

const StyledH3 = styled.h3`
  padding: 4px; 
  background-color: #f20f0f;
  border-radius: 4px;
  text-align: center;
  margin: 0 24px;
`;


class GameMain extends React.Component{
    constructor(props) {
        super(props);

        const gameData = new GameData();
        this.state = {boxes: gameData.boxes, shuffledBoxes: gameData.shuffledBoxes, chooseBox: false};
        this.setState = this.setState.bind(this);
    }

    render() {
        return (
            <MainBoard>
                <StyledDiv>
                    <StyledPanelsDiv style={{visibility: this.state.chooseBox ? 'hidden' : 'visible'}}>
                        <Panel panelItems={this.state.boxes.slice(0, 12)} left={false} />
                    </StyledPanelsDiv>

                    <StyledCenterDiv>
                        <BoxesHolder boxes={this.state.shuffledBoxes} setState={this.setState}/>

                        <BoxesHolder yourBox={true}/>

                        {this.state.chooseBox && <StyledH3>أختار صندوق</StyledH3>}
                    </StyledCenterDiv>

                    <StyledPanelsDiv style={{visibility: this.state.chooseBox ? 'hidden' : 'visible', direction: 'rtl'}}>
                        <Panel panelItems={this.state.boxes.slice(12, 24)} left={true} />
                    </StyledPanelsDiv>
                </StyledDiv>
            </MainBoard>
        );
    }
}

export default GameMain;