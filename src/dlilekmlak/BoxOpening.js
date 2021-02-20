import styled from "styled-components";
import BoxOpeningImg from "./imgs/box-oppening.svg"
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

const StyledDiv = styled(motion.div)`
  display: flex;
  width: 50%;
  position: relative;
  text-align: center;
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  color: #000000;
  font-size: 1.5rem;
  transform: translate(-50%, -50%);
  direction: rtl;
`;

function BoxOpening(props) {
    const [text, setText] = useState('');

    // play convenient sound after box is opened
    function playSound(index) {
        switch (index) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                props.gameAudio.goodClappingAudio.play();
                break;
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
                props.gameAudio.clappingAudio.play();
                break;
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
                props.gameAudio.laughingAudio.play();
                break;
        }
    }

    // show convenient text on box opening
    useEffect(() => {
        let id1, id2;
        if (props.mainState.boxOpening && props.mainState.openedBoxIndex >= 0) {
            props.gameAudio.boxOpeningAudio.play();
            setText(props.mainState.openedBoxIndex + 1);
            id1 = setInterval(() => {
                const openedBox = props.mainState.shuffledBoxes[props.mainState.openedBoxIndex];
                if (openedBox.id === 'lwc-02' || openedBox.id === 'lwc-06' || openedBox.id === 'lwc-10' || openedBox.id === 'lwc-12') setText(openedBox.value)
                else setText(` ${openedBox.value} د `);
                id2 = setInterval(() => {
                    let oldBoxes = [...props.mainState.shuffledBoxes];
                    oldBoxes[props.mainState.openedBoxIndex].value = '';
                    let oldBoxes2 = [...props.mainState.boxes];
                    oldBoxes2[oldBoxes[props.mainState.openedBoxIndex].index].value = '';
                    const numOpenedBoxes = props.mainState.numOpenedBoxes;
                    const proposalSwal = (numOpenedBoxes === 5 || numOpenedBoxes === 11 || numOpenedBoxes === 17 || numOpenedBoxes === 21)
                    const winnings = numOpenedBoxes === 22 ? props.mainState.shuffledBoxes[props.mainState.yourBox.index] : null
                    props.setState((prevState) => {
                        return {
                            boxes: oldBoxes2,
                            shuffledBoxes: oldBoxes,
                            boxOpening: false,
                            showProposalSwal: proposalSwal,
                            numOpenedBoxes: prevState.numOpenedBoxes + 1,
                            winnings: winnings
                        }
                    })
                    if (props.mainState.numOpenedBoxes < 21) playSound(openedBox.index);
                }, 600);
            }, 800);
        }

        return () => {
            clearInterval(id1);
            clearInterval(id2);
        };
    }, [props]);

    return (
        <StyledDiv transition={{duration: 0.35}} initial={{scale: 0}} animate={{scale: 1}}>
            <img style={{width: '100%'}} src={BoxOpeningImg} alt="Box Opening"/>
            <StyledSpan>{text}</StyledSpan>
        </StyledDiv>
    );
}

export default BoxOpening;