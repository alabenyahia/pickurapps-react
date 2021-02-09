import styled from "styled-components";
import ChooseBtn from "./ChooseBtn";

const StyledRow = styled.div`
    display: flex;
    margin-bottom: 12px;
`;

function ChooseRow(props) {
    function renderBtns() {
        return props.charrArr.map((item, index)=> <ChooseBtn key={index} char={item}/>);
    }

    return (
        <StyledRow>
            {renderBtns()}
        </StyledRow>
    );
}

export default ChooseRow;