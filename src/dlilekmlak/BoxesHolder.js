import styled from "styled-components";
import Box from "./Box";

const StyledDiv = styled.div`
  padding: 10px 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  margin: 8px 24px;
`;

const StyledColumn = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 16.6666666667%;
`;

function BoxesHolder(props) {
    function renderBoxes() {
        return props.boxes.map((item)=> <StyledColumn><Box key={item.id} /></StyledColumn>)
    }

    return (
        <StyledDiv>
            {renderBoxes()}
        </StyledDiv>
    );
}

export default BoxesHolder;