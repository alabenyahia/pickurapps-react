import styled from "styled-components";
import ChooseBtn from "./ChooseBtn";

const StyledRow = styled.div`
    display: flex;
    margin-bottom: 12px;
`;

function ChooseRow(props) {
    function renderBtns() {
        console.log("chooseRow arr", props.charrArr);
        return props.charrArr.map((item, index) => <ChooseBtn char={item} key={index}/>)
    }

    return (
        <StyledRow>
            {renderBtns()}
        </StyledRow>
    );
}

export default ChooseRow;