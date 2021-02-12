import styled from "styled-components";

const StyledDiv = styled.div`
    padding: 0.5rem 1rem;
    background: brown;
    color: #ffffff;
    direction: rtl;
    outline: 1px solid white;
    text-align: ${props => props.left ? 'left' : 'right'};
    font-family: inherit;
    width: 100%;
    box-sizing: border-box;
`;

function PanelItem(props) {

    return (
        <StyledDiv left={props.left}>{props.children}</StyledDiv>
    );
}

export default PanelItem;