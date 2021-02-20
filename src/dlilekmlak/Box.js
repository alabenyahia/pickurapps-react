import styled from "styled-components";
import BoxImg from "./imgs/box.svg";
import YourBoxImg from "./imgs/your-box.svg"
import PressedBoxImg from "./imgs/box-pressed.svg"
import {useState} from "react";
import {motion} from "framer-motion"

const StyledDiv = styled(motion.div)`
  cursor: ${props => props.yourBox ? 'default' : 'pointer'};
  width: 85%;
  box-sizing: border-box;
  margin: 5px 10px;
  position: relative;
  text-align: center;
  display: flex;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 65%;
  left: 50%;
  color: #000000;
  font-size: 1.5rem;
  transform: translate(-50%, -50%);
`;

function Box(props) {
    const [isHovered, setIsHovered] = useState(false);
    const [animate, setAnimate] = useState(false);

    // handle box click
    const handleClick = () => {
        if (props.yourBox) return
        setAnimate(true);
        if (props.mainState.chooseBox) props.gameAudio.boxChosen.play();
    }

    // fire when box animation is completed
    const handleAnimationComplete = () => {
        setAnimate(false);
        if (props.mainState.chooseBox) {
            props.setState({chooseBox: false, yourBox: {index: props.text - 1}});
        } else {
            props.gameAudio.stopAllAudio();
            props.setState({boxOpening: true, openedBoxIndex: props.text - 1});
        }
    }

    const isEmpty = !props.yourBox && props.mainState.shuffledBoxes[props.text - 1].value === '';

    return (
        <StyledDiv transition={{duration: 0.4}} animate={animate ? {scale: 0} : {}}
                   style={{visibility: isEmpty ? 'hidden' : 'visible'}}
                   yourBox={props.yourBox} text={props.text} onClick={() => handleClick()}
                   onAnimationComplete={() => handleAnimationComplete()}
                   onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
            <StyledImg src={props.yourBox ? YourBoxImg : isHovered ? PressedBoxImg : BoxImg} alt="Box"/>
            <StyledSpan>{props.yourBox && props.yourBoxVal.hasOwnProperty('index') ? props.yourBoxVal.index + 1 : props.text}</StyledSpan>
        </StyledDiv>
    );
}

export default Box;