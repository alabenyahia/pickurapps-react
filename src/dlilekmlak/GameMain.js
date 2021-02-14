import React, {useRef} from "react"
import MainBoard from "./MainBoard";
import {GameData} from "./gameData";
import Panel from "./Panel";
import styled from "styled-components";
import BoxesHolder from "./BoxesHolder";
import cloneDeep from "lodash/cloneDeep"
import BoxOpening from "./BoxOpening";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

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
        this.setState = this.setState.bind(this);

        let gameData = new GameData();
        this.MySwal = withReactContent(Swal);
        this.state = {boxes: cloneDeep(gameData.boxes), shuffledBoxes: cloneDeep(gameData.shuffledBoxes),
            yourBox: {}, chooseBox: true, boxOpening: false, openedBoxIndex: -1, numOpenedBoxes: 0,
            showSwal: false};
    }


    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.state.showSwal) {
            this.MySwal.fire(this.state.shuffledBoxes[this.state.yourBox.index]);
            this.setState({showSwal: false});
        }
    }

    render() {
        return (
            <MainBoard>
                <StyledDiv>
                    <StyledPanelsDiv style={{visibility: this.state.chooseBox ? 'hidden' : 'visible'}}>
                        <Panel panelItems={this.state.boxes.slice(0, 12)} left={false} />
                    </StyledPanelsDiv>

                    {
                        this.state.boxOpening ? (
                            <StyledCenterDiv style={{display: 'flex', justifyContent: 'center'}}>
                                <BoxOpening mainState={this.state} setState={this.setState}/>
                            </StyledCenterDiv>
                        ) : (
                            <StyledCenterDiv>
                                <BoxesHolder mainState={this.state} setState={this.setState}/>

                                <BoxesHolder yourBoxVal={this.state.yourBox} yourBox={true}/>

                                {this.state.chooseBox && <StyledH3>أختار صندوق</StyledH3>}
                            </StyledCenterDiv>
                        )
                    }

                    <StyledPanelsDiv style={{visibility: this.state.chooseBox ? 'hidden' : 'visible', direction: 'rtl'}}>
                        <Panel panelItems={this.state.boxes.slice(12, 24)} left={true} />
                    </StyledPanelsDiv>
                </StyledDiv>
            </MainBoard>
        );
    }
}

export default GameMain;