import styled from "styled-components";

const StyledDiv = styled.div`
    padding: 0.5rem 1rem;
    background: ${props=> props.bgColor};
    background: ${props=> props.bgGradient};
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
        <StyledDiv bgColor={props.bgColor} bgGradient={props.bgGradient} left={props.left}>{props.children}</StyledDiv>
    );
}

export default PanelItem;