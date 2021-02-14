import styled from "styled-components";
import BoxOpeningImg from "./imgs/box-oppening.svg"
import {useEffect, useState} from "react";

const StyledDiv = styled.div`
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
`;

function BoxOpening(props) {
    const [text, setText] = useState('');
    useEffect(()=>{
        let id1, id2;
        if (props.mainState.boxOpening && props.mainState.openedBoxIndex >= 0) {
            setText(props.mainState.openedBoxIndex+1);
            id1 = setInterval(()=> {
                setText(props.mainState.shuffledBoxes[props.mainState.openedBoxIndex].value);
                id2 = setInterval(()=>{
                    let oldBoxes = [...props.mainState.shuffledBoxes];
                    oldBoxes[props.mainState.openedBoxIndex].value = '';
                    let oldBoxes2 = [...props.mainState.boxes];
                    oldBoxes2[oldBoxes[props.mainState.openedBoxIndex].index].value = '';
                    const numOpenedBoxes = props.mainState.numOpenedBoxes;
                    const swal = (numOpenedBoxes === 5 || numOpenedBoxes === 11 || numOpenedBoxes === 17 || numOpenedBoxes === 21)
                    props.setState((prevState)=>{return {boxes:oldBoxes2, shuffledBoxes: oldBoxes, boxOpening: false, showSwal: swal, numOpenedBoxes: prevState.numOpenedBoxes+1}})
                }, 600);
            }, 800);
        }

        return ()=>{
            clearInterval(id1);
            clearInterval(id2);
        };
    }, [props]);

    return (
        <StyledDiv>
            <img style={{width: '100%'}} src={BoxOpeningImg} alt="Box Opening"/>
            <StyledSpan>{text}</StyledSpan>
        </StyledDiv>
    );
}

export default BoxOpening;