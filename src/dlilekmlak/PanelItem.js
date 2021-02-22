import styled from "styled-components";
import {motion} from "framer-motion";

const StyledDiv = styled(motion.div)`
  padding: 0.35rem 1.3rem;
  background: ${props => props.bgColor};
  background: ${props => props.bgGradient};
  color: #ffffff;
  direction: rtl;
  border: 1px solid white;
  text-align: ${props => props.left ? 'left' : 'right'};
  font-family: inherit;
  width: 100%;
  box-sizing: border-box;
  height: 36px;
  max-height: 36px;
  cursor: default;
  user-select: none;
`;

function PanelItem(props) {


    return (
        <StyledDiv animate={props.value === '' ? {width: '40%'} : {}}
                   bgColor={props.bgColor} bgGradient={props.bgGradient} left={props.left} value={props.value}>
            {(props.value === '' || props.id === 'lwc-02' || props.id === 'lwc-06' || props.id === 'lwc-10' || props.id === 'lwc-12') ? props.value : ` ${props.value} د `}
        </StyledDiv>
    );
}

export default PanelItem;