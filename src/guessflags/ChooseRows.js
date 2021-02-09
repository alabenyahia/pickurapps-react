import styled from "styled-components";
import ChooseRow from "./ChooseRow";

const StyledRows = styled.div`
  margin: 30px 8px;
`;

function ChooseRows(props) {
    return (
        <StyledRows>
            <ChooseRow charrArr={props.charArr.slice(0, 7)}/>
            <ChooseRow charrArr={props.charArr.slice(7, 14)}/>
        </StyledRows>
    );
}

export default ChooseRows;