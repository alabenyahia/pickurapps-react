import MainBoard from "./MainBoard";
import {boxes} from "./gameData";
import Panel from "./Panel";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
`;

const StyledPanelsDiv = styled.div`
  flex-basis: 30%;

`;



function GameMain(props) {


    return (
        <MainBoard>
            <StyledDiv>
                <StyledPanelsDiv>
                    <Panel panelItems={boxes.slice(0, 12)} left={false}/>
                </StyledPanelsDiv>

                <StyledPanelsDiv>
                    <Panel panelItems={boxes.slice(12, 24)} left={true}/>
                </StyledPanelsDiv>
            </StyledDiv>
        </MainBoard>
    );
}

export default GameMain;