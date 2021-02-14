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
import random from "lodash/random"

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
            let switchRand = random(0, 1);
            let minVal = {}
            let maxVal = {}
            for (let i=0; i<this.state.boxes.length; i++) {
                if (this.state.boxes[i].value!=='') {
                    minVal = this.state.boxes[i];
                    break;
                }
            }

            for (let i=this.state.boxes.length-1; i>=0; i--) {
                if (this.state.boxes[i].value!=='') {
                    maxVal = this.state.boxes[i];
                    break;
                }
            }

            let proposal = 0;
            switch (this.state.shuffledBoxes[this.state.yourBox.index].id) {
                case 'lwc-01':
                case 'lwc-02':
                case 'lwc-03':
                case 'lwc-04':
                case 'lwc-05':
                case 'lwc-06':
                case 'lwc-07':
                case 'lwc-08':
                case 'lwc-09':
                case 'lwc-10':
                case 'lwc-11':
                case 'lwc-12':
                    if (maxVal.id <= "lwc-12") proposal = parseInt(random(10, 100));
                    if (this.state.numOpenedBoxes > 17) {
                        if (maxVal.id >= "rwc-01") proposal = parseInt(random(2000, parseFloat(this.convertBoxValue(maxVal))*0.75));
                        if (maxVal.id >= "rwc-07") proposal = parseInt(random(4800, parseFloat(this.convertBoxValue(maxVal))*0.70));
                        if (maxVal.id >= "rwc-09") proposal = parseInt(random(20000, 150000));
                    }
                    else {
                        if (maxVal.id >= "rwc-01") proposal = parseInt(random(2000, parseFloat(this.convertBoxValue(maxVal))*0.70));
                        if (maxVal.id >= "rwc-07") proposal = parseInt(random(4800, parseFloat(this.convertBoxValue(maxVal))*0.65));
                        if (maxVal.id >= "rwc-09") proposal = parseInt(random(5000, 40000));
                    }
                    break;
                case 'rwc-01':
                case 'rwc-02':
                case 'rwc-03':
                case 'rwc-04':
                case 'rwc-05':
                case 'rwc-06':
                case 'rwc-07':
                case 'rwc-08':
                case 'rwc-09':
                case 'rwc-10':
                    if (this.state.numOpenedBoxes < 17) {
                        if (minVal.id >= 'rwc-01')
                            proposal = parseInt(random((parseFloat(this.convertBoxValue(minVal)) * 1.05), parseFloat(this.convertBoxValue(maxVal))  * 0.1));
                        else
                            proposal = parseInt(random((parseFloat(this.convertBoxValue(this.state.shuffledBoxes[this.state.yourBox.index])) * 0.3), parseFloat(this.convertBoxValue(maxVal))  * 0.03));
                    } else {
                        if (minVal.id >= 'rwc-01')
                            proposal = parseInt(random((parseFloat(this.convertBoxValue(minVal)) * 1.35), parseFloat(this.convertBoxValue(maxVal))  * 0.45));
                        else
                            proposal = parseInt(random((parseFloat(this.convertBoxValue(this.state.shuffledBoxes[this.state.yourBox.index])) * 0.5), parseFloat(this.convertBoxValue(maxVal))  * 0.3));
                    }
                    break;
                case 'rwc-11':
                case 'rwc-12':
                    if (this.state.numOpenedBoxes < 14) {
                        if (minVal.id >= 'rwc-01')
                            proposal = parseInt(random((parseFloat(this.convertBoxValue(minVal)) * 1.5), parseFloat(this.convertBoxValue(maxVal))  * 0.12));
                        else
                            proposal = parseInt(parseFloat(this.convertBoxValue(this.state.shuffledBoxes[this.state.yourBox.index])) * random(0.008 , 0.03));
                    }
                    else {
                        if (minVal.id <= 'lwc-12')
                            proposal = parseInt(random(parseFloat(this.convertBoxValue(maxVal))  * 0.08, parseFloat(this.convertBoxValue(maxVal))  * 0.45));
                        if (minVal.id >= 'rwc-01')
                            proposal = parseInt(random(parseFloat(this.convertBoxValue(maxVal))  * 0.1, parseFloat(this.convertBoxValue(maxVal))  * 0.6));
                        if (minVal.id >= 'rwc-09')
                            proposal = parseInt(random((parseFloat(this.convertBoxValue(minVal)) * 1.45), parseFloat(this.convertBoxValue(maxVal))  * 0.95));
                        if (minVal.id >= 'rwc-11')
                            proposal = parseInt(random((parseFloat(this.convertBoxValue(minVal)) * 1.25), parseFloat(this.convertBoxValue(maxVal))  * 0.95));
                    }
                    break;
            }

            console.log("min", minVal);
            console.log("max", maxVal);
            console.log("proposal", proposal);

            this.MySwal.fire(""+proposal);
            this.setState({showSwal: false});
        }
    }

    convertBoxValue(val) {
        if (val.id === 'lwc-02' || val.id === 'lwc-06' || val.id === 'lwc-10' || val.id === 'lwc-12') return 1;
        if (val.id === 'lwc-01' || val.id === 'lwc-03' || val.id === 'lwc-04' || val.id === 'lwc-05' || val.id === 'lwc-07' || val.id === 'lwc-08' ||
            val.id === 'lwc-09' || val.id === 'lwc-11') return val.value;
        if (val.id === 'rwc-01' || val.id === 'rwc-02' || val.id === 'rwc-03' || val.id === 'rwc-04' || val.id === 'rwc-05' || val.id === 'rwc-06' ||
            val.id === 'rwc-07' || val.id === 'rwc-08' || val.id === 'rwc-09' || val.id === 'rwc-10') return parseFloat(val.value)*1000;
        if (val.id === 'rwc-11' || val.id === 'rwc-12') return parseFloat(val.value)*1000000;
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