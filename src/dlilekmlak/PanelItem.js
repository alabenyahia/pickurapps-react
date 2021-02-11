import styled from "styled-components";

const StyledDiv = styled.div`
    padding: 0.5rem 1rem;
    background: brown;
    color: #ffffff;
    direction: rtl;
    outline: 1px solid white;
    text-align: ${props => props.left ? 'left' : 'right'};
    font-family: inherit;
`;

function PanelItem(props) {

    return (
        <StyledDiv></StyledDiv>
    );
}

export default PanelItem;