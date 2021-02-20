import React from "react"
import {GameAudio, GameData} from "./gameData";
import Panel from "./Panel";
import styled from "styled-components";
import BoxesHolder from "./BoxesHolder";
import cloneDeep from "lodash/cloneDeep"
import BoxOpening from "./BoxOpening";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import random from "lodash/random"
import ProposalSwal from "./swal/ProposalSwal";
import WinningSwal from "./swal/WinningSwal";
import "./swal/swalStyle.css"

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


class GameMain extends React.Component {
    constructor(props) {
        super(props);
        this.setState = this.setState.bind(this);
        let gameData = new GameData();
        this.gameAudio = new GameAudio();
        this.MySwal = withReactContent(Swal);
        this.state = {
            boxes: cloneDeep(gameData.boxes), shuffledBoxes: cloneDeep(gameData.shuffledBoxes),
            yourBox: {}, chooseBox: true, boxOpening: false, openedBoxIndex: -1, numOpenedBoxes: 0,
            showProposalSwal: false, winnings: null, wasInYourBox: null
        };
    }

    // play convenient sound for what player had win
    playWinningSound(winning, wasInUrBox) {
        this.gameAudio.stopAllAudio();
        if (wasInUrBox) {
            wasInUrBox = this.convertBoxValue(wasInUrBox);
            if (winning > wasInUrBox) this.gameAudio.clappingAudio.play();
            else this.gameAudio.laughingAudio.play();
        } else {
            winning = this.convertBoxValue(winning);
            if (winning < 5000) this.gameAudio.laughingAudio.play();
            else if (winning >= 5000 && winning < 100000) this.gameAudio.clappingAudio.play();
            else this.gameAudio.goodClappingAudio.play();
        }
    }


    // handle verifying & showings winnigs & showing proposals
    // (runs each time this component updates)
    componentDidUpdate(prevProps, prevState, snapshot) {

        // run when the player has finished the game (hence won something)
        if (this.state.winnings !== null) {

            // formating was in your box and winnings value to show in the dialog box
            let wasInUrBox;
            if (this.state.wasInYourBox === null) {
                wasInUrBox = false
            } else {
                wasInUrBox = this.convertBoxValue(this.state.wasInYourBox);
            }
            if (wasInUrBox !== false) {
                if (wasInUrBox === 1) {
                    if (wasInUrBox.id === 'lwc-03') wasInUrBox = `${this.state.wasInYourBox.value} د `;
                    else wasInUrBox = this.state.wasInYourBox.value;
                } else {
                    wasInUrBox = `${this.formatWinnings(wasInUrBox)} د `;
                }
            }

            let winnings;
            if (this.state.wasInYourBox === null) {
                winnings = this.convertBoxValue(this.state.winnings);
                if (winnings === 1) {
                    if (winnings.id === 'lwc-03') winnings = `${winnings} د `;
                    else winnings = this.state.winnings.value;
                } else winnings = `${this.formatWinnings(winnings)} د `;
            } else {
                winnings = `${this.formatWinnings(this.state.winnings)} د `;
            }

            this.playWinningSound(this.state.winnings, this.state.wasInYourBox);
            // show winning dialog box
            this.MySwal.fire({
                html: <WinningSwal winnings={winnings} wasInUrBox={wasInUrBox}/>,
                background: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
                confirmButtonText: 'أي',
                showDenyButton: true,
                denyButtonText: 'لا',
                allowEscapeKey: false,
                allowEnterKey: false,
                allowOutsideClick: false,
                buttonsStyling: false,
                customClass: {
                    confirmButton: 'swal-buttons-style swal-confirmbutton-style',
                    denyButton: 'swal-buttons-style swal-denybutton-style',
                    actions: 'swal-actions-style'
                }
            }).then((result) => {
                this.gameAudio.stopAllAudio();
                if (result.isConfirmed) {
                    this.resetState();
                } else if (result.isDenied) {
                    this.props.history.push('/dlilekmlak');
                }
            });
            // runs when a proposal dialog need to be shown
        } else if (this.state.showProposalSwal) {
            let switchRand = random(0, 1);
            let minVal = {}
            let maxVal = {}
            // get mininmum box remaining to the player
            for (let i = 0; i < this.state.boxes.length; i++) {
                if (this.state.boxes[i].value !== '') {
                    minVal = {...this.state.boxes[i]};
                    if (minVal.id === 'lwc-02' || minVal.id === 'lwc-06' || minVal.id === 'lwc-10' || minVal.id === 'lwc-12') minVal.value = 1;
                    break;
                }
            }

            // get maximum box remaining to the player
            for (let i = this.state.boxes.length - 1; i >= 0; i--) {
                if (this.state.boxes[i].value !== '') {
                    maxVal = {...this.state.boxes[i]};
                    if (maxVal.id === 'lwc-02' || maxVal.id === 'lwc-06' || maxVal.id === 'lwc-10' || maxVal.id === 'lwc-12') maxVal.value = 1;
                    break;
                }
            }
            let proposal = 0;
            if (switchRand !== 0) {
                // the proposal algorithm ( how much will the player get as a proposal based on his box & the minimum & maximum remaining boxes )
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
                            if (maxVal.id >= "rwc-01") proposal = parseInt(random(2000, parseFloat(this.convertBoxValue(maxVal)) * 0.75));
                            if (maxVal.id >= "rwc-07") proposal = parseInt(random(4800, parseFloat(this.convertBoxValue(maxVal)) * 0.70));
                            if (maxVal.id >= "rwc-09") proposal = parseInt(random(20000, 150000));
                        } else {
                            if (maxVal.id >= "rwc-01") proposal = parseInt(random(2000, parseFloat(this.convertBoxValue(maxVal)) * 0.70));
                            if (maxVal.id >= "rwc-07") proposal = parseInt(random(4800, parseFloat(this.convertBoxValue(maxVal)) * 0.65));
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
                                proposal = parseInt(random((parseFloat(this.convertBoxValue(minVal)) * 1.05), parseFloat(this.convertBoxValue(maxVal)) * 0.1));
                            else
                                proposal = parseInt(random((parseFloat(this.convertBoxValue(this.state.shuffledBoxes[this.state.yourBox.index])) * 0.3), parseFloat(this.convertBoxValue(maxVal)) * 0.03));
                        } else {
                            if (minVal.id >= 'rwc-01')
                                proposal = parseInt(random((parseFloat(this.convertBoxValue(minVal)) * 1.35), parseFloat(this.convertBoxValue(maxVal)) * 0.45));
                            else
                                proposal = parseInt(random((parseFloat(this.convertBoxValue(this.state.shuffledBoxes[this.state.yourBox.index])) * 0.5), parseFloat(this.convertBoxValue(maxVal)) * 0.3));
                        }
                        break;
                    case 'rwc-11':
                    case 'rwc-12':
                        if (this.state.numOpenedBoxes < 14) {
                            if (minVal.id >= 'rwc-01')
                                proposal = parseInt(random((parseFloat(this.convertBoxValue(minVal)) * 1.5), parseFloat(this.convertBoxValue(maxVal)) * 0.12));
                            else
                                proposal = parseInt(parseFloat(this.convertBoxValue(this.state.shuffledBoxes[this.state.yourBox.index])) * random(0.008, 0.03));
                        } else {
                            if (minVal.id <= 'lwc-12')
                                proposal = parseInt(random(parseFloat(this.convertBoxValue(maxVal)) * 0.08, parseFloat(this.convertBoxValue(maxVal)) * 0.45));
                            if (minVal.id >= 'rwc-01')
                                proposal = parseInt(random(parseFloat(this.convertBoxValue(maxVal)) * 0.1, parseFloat(this.convertBoxValue(maxVal)) * 0.6));
                            if (minVal.id >= 'rwc-09')
                                proposal = parseInt(random((parseFloat(this.convertBoxValue(minVal)) * 1.45), parseFloat(this.convertBoxValue(maxVal)) * 0.95));
                            if (minVal.id >= 'rwc-11')
                                proposal = parseInt(random((parseFloat(this.convertBoxValue(minVal)) * 1.25), parseFloat(this.convertBoxValue(maxVal)) * 0.95));
                        }
                        break;
                }
            }

            // stop all sounds & play phone sound
            this.gameAudio.stopAllAudio();
            this.gameAudio.phoneAudio.loop = true;
            this.gameAudio.phoneAudio.play();

            // show proposal dialog box
            this.MySwal.fire({
                html: <ProposalSwal isSwitch={switchRand === 0} proposal={`${this.formatWinnings(proposal)} د `}/>,
                background: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
                confirmButtonText: 'أي نقبل',
                showDenyButton: true,
                denyButtonText: 'لا نرفض',
                allowEscapeKey: false,
                allowEnterKey: false,
                allowOutsideClick: false,
                buttonsStyling: false,
                customClass: {
                    confirmButton: 'swal-buttons-style swal-confirmbutton-style',
                    denyButton: 'swal-buttons-style swal-denybutton-style',
                    actions: 'swal-actions-style'
                }
            }).then((result) => {
                this.gameAudio.phoneAudio.pause();
                this.gameAudio.phoneAudio.currentTime = 0;

                if (result.isConfirmed) {
                    if (switchRand === 0) {
                        this.setState({chooseBox: true});
                    } else {
                        this.setState({
                            winnings: proposal,
                            wasInYourBox: this.state.shuffledBoxes[this.state.yourBox.index]
                        });
                    }
                }
            });
            this.setState({showProposalSwal: false});
        }
    }

    // reset the component's state
    resetState() {
        let gameData = new GameData();
        this.setState({
            boxes: cloneDeep(gameData.boxes), shuffledBoxes: cloneDeep(gameData.shuffledBoxes),
            yourBox: {}, chooseBox: true, boxOpening: false, openedBoxIndex: -1, numOpenedBoxes: 0,
            showProposalSwal: false, winnings: null, wasInYourBox: null
        });
    }

    // stop all sounds & close the dialog when component unmounts
    componentWillUnmount() {
        this.gameAudio.stopAllAudio();
        this.MySwal.close();
    }


    // take box object and return in integer value & returns 1 if value is (thing)
    convertBoxValue(val) {
        if (val.id === 'lwc-02' || val.id === 'lwc-06' || val.id === 'lwc-10' || val.id === 'lwc-12') return 1;
        if (val.id === 'lwc-01' || val.id === 'lwc-03' || val.id === 'lwc-04' || val.id === 'lwc-05' || val.id === 'lwc-07' || val.id === 'lwc-08' ||
            val.id === 'lwc-09' || val.id === 'lwc-11') return val.value;
        if (val.id === 'rwc-01' || val.id === 'rwc-02' || val.id === 'rwc-03' || val.id === 'rwc-04' || val.id === 'rwc-05' || val.id === 'rwc-06' ||
            val.id === 'rwc-07' || val.id === 'rwc-08' || val.id === 'rwc-09' || val.id === 'rwc-10') return parseFloat(val.value) * 1000;
        if (val.id === 'rwc-11' || val.id === 'rwc-12') return parseFloat(val.value) * 1000000;
    }

    // format winnings numbers
    formatWinnings(val) {
        val = val.toString();
        let j = 0;
        let str = "";
        for (let i = val.length - 1; i >= 0; i--) {
            str = val[i] + str;
            j++;
            if (j % 3 === 0 && i > 0) str = '.' + str;
        }
        return str;
    }

    render() {
        return (
            <>
                <StyledDiv>
                    <StyledPanelsDiv style={{visibility: this.state.chooseBox ? 'hidden' : 'visible'}}>
                        <Panel panelItems={this.state.boxes.slice(0, 12)} left={false}/>
                    </StyledPanelsDiv>

                    {
                        this.state.boxOpening ? (
                            <StyledCenterDiv style={{display: 'flex', justifyContent: 'center'}}>
                                <BoxOpening gameAudio={this.gameAudio} mainState={this.state} setState={this.setState}/>
                            </StyledCenterDiv>
                        ) : (
                            <StyledCenterDiv>
                                <BoxesHolder gameAudio={this.gameAudio} mainState={this.state}
                                             setState={this.setState}/>

                                <BoxesHolder yourBoxVal={this.state.yourBox} yourBox={true}/>

                                {this.state.chooseBox && <StyledH3>أختار صندوق</StyledH3>}
                            </StyledCenterDiv>
                        )
                    }

                    <StyledPanelsDiv
                        style={{visibility: this.state.chooseBox ? 'hidden' : 'visible', direction: 'rtl'}}>
                        <Panel panelItems={this.state.boxes.slice(12, 24)} left={true}/>
                    </StyledPanelsDiv>
                </StyledDiv>
            </>
        );
    }
}

export default GameMain;