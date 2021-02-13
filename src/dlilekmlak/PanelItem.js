import styled from "styled-components";

const StyledDiv = styled.div`
    padding: 0.35rem 1.3rem;
    background: ${props=> props.bgColor};
    background: ${props=> props.bgGradient};
    color: #ffffff;
    direction: rtl;
    border: 1px solid white;
    text-align: ${props => props.left ? 'left' : 'right'};
    font-family: inherit;
    width: ${props=> props.value === '' ? '40%' : '100%'};
    box-sizing: border-box;
    height: 38px;
    max-height: 38px;
`;

function PanelItem(props) {


    return (
        <StyledDiv bgColor={props.bgColor} bgGradient={props.bgGradient} left={props.left} value={props.value} >
            <span>{(props.value === '' || props.id === 'lwc-02' || props.id === 'lwc-06' || props.id === 'lwc-10' || props.id === 'lwc-12') ? props.value : ` ${props.value} د `}</span>
        </StyledDiv>
    );
}

export default PanelItem;