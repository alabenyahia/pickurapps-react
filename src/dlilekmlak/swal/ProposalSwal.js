import styled from "styled-components";

const StyledDiv = styled.div`
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
                <StyledDiv>
                    <StyledP> البانكة تقترح عليك : تغيير الصندوق</StyledP>
                </StyledDiv>
            );
        } else {
            return (
                <StyledDiv>
                    <StyledP> البانكة تقترح عليك : {props.proposal} </StyledP>
                </StyledDiv>
            );
        }
    }
    return renderPropSwal();
}

export default ProposalSwal;