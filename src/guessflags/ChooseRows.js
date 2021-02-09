import styled from "styled-components";
import ChooseRow from "./ChooseRow";

const StyledRows = styled.div`
  margin: 30px 8px;
`;

function ChooseRows(props) {
    const firstHalf = props.charArr.splice(0, 7);
    const secondHalf = props.charArr.splice(-7);
    return (
        <StyledRows>
            <ChooseRow charrArr={firstHalf}/>
            <ChooseRow charrArr={secondHalf}/>
        </StyledRows>
    );
}

export default ChooseRows;