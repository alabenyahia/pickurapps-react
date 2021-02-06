import styled from "styled-components";
import ChooseRow from "./ChooseRow";

const StyledRows = styled.div`
  margin: 30px 8px;
`;

function ChooseRows() {

    return (
        <StyledRows>
            <ChooseRow/>
            <ChooseRow/>
        </StyledRows>
    );
}

export default ChooseRows;