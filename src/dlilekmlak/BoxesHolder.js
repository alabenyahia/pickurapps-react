import styled from "styled-components";
import Box from "./Box";
import Panel from "./Panel";
import React from "react";

const StyledDiv = styled.div`
  padding: ${props => props.yourBox ? '0' : '10px 8px'};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${props=> props.yourBox ? 'transparent' : 'rgba(255, 255, 255, 0.4)'};
  border-radius: 8px;
  margin: 8px 24px;
  justify-content: center;
`;

const StyledColumn = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 16.6666666667%;
`;

function BoxesHolder(props) {
    function renderBoxes() {
        if (props.yourBox) return <StyledColumn><Box yourBox={props.yourBox} text={props.text}/></StyledColumn>
        else return props.boxes.map((item, index)=>
            (<StyledColumn>
                <Box key={item.id} text={index+1} boxes={props.boxes} setState={props.setState}/>
            </StyledColumn>));
    }

    return (
        <StyledDiv yourBox={props.yourBox}>
            {renderBoxes()}
        </StyledDiv>
    );
}

export default BoxesHolder;