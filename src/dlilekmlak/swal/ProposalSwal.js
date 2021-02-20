import styled from "styled-components";
import {motion} from "framer-motion";

const StyledDiv = styled(motion.div)`
  color: #ffffff;
  text-align: center;
  font-family: "Lalezar", sans-serif;
`;

const StyledP = styled.p`
  margin: 16px 0 24px 0;
  font-size: 1.5rem;
  direction: rtl;
`;


function ProposalSwal(props) {

    function renderPropSwal() {
        if (props.isSwitch) {
            return (
                <StyledP> البانكة تقترح عليك : تغيير الصندوق</StyledP>
            );
        } else {
            return (
                <StyledP> البانكة تقترح عليك : {props.proposal} </StyledP>
            );
        }
    }

    return <StyledDiv animate={{scale:[1, 1.15, 1]}} transition={{repeat: Infinity}}>
        {renderPropSwal()}
    </StyledDiv>
}

export default ProposalSwal;