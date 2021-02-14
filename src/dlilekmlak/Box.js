import styled from "styled-components";
import BoxImg from "./imgs/box.svg";
import YourBoxImg from "./imgs/your-box.svg"

const StyledDiv = styled.div`
  cursor: ${props => props.yourBox ? 'default' : 'pointer'} ;
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

    const handleClick = () => {
        if (props.yourBox) return
        if (props.mainState.chooseBox) {
            let newState = {...props.mainState};
            newState.chooseBox = false;
            newState.yourBox = {index: props.text-1}
            props.setState(newState);
        } else {
            props.setState({boxOpening: true, openedBoxIndex: props.text-1});
        }
    }

    return (
        <StyledDiv style={{visibility: (props.yourBox!==true && props.mainState.shuffledBoxes[props.text-1].value === '') ? 'hidden' : 'visible'}}
                   yourBox={props.yourBox} text={props.text} onClick={()=>handleClick()}>
            <StyledImg src={props.yourBox ? YourBoxImg : BoxImg} alt="Box"/>
            <StyledSpan>{props.yourBox && props.yourBoxVal.hasOwnProperty('index')? props.yourBoxVal.index+1 : props.text}</StyledSpan>
        </StyledDiv>
    );
}

export default Box;