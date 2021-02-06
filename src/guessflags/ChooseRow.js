import styled from "styled-components";
import ChooseBtn from "./ChooseBtn";

const StyledRow = styled.div`
    display: flex;
    margin-bottom: 12px;
`;

function ChooseRow() {

    return (
        <StyledRow>
            <ChooseBtn/>
            <ChooseBtn/>
            <ChooseBtn/>
            <ChooseBtn/>
            <ChooseBtn/>
            <ChooseBtn/>
            <ChooseBtn/>
        </StyledRow>
    );
}

export default ChooseRow;