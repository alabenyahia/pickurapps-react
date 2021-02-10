import styled from "styled-components";

const StyledBtn = styled.div`
    flex: 1;
    margin:0 8px 8px 8px;
    padding: 12px;
    background-color: #7D5A5A;
    color: white;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
`;

function ChooseBtn(props) {

    return (
        <StyledBtn onClick={() => props.handleChooseBtnClick(props.char)}>{props.char}</StyledBtn>
    );
}

export default ChooseBtn;