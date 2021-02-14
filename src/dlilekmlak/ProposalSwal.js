import styled from "styled-components";

const StyledDiv = styled.div`
  color: #ffffff;
  text-align: center;
`;

function ProposalSwal(props) {

    function renderPropSwal() {
        if (props.isSwitch) {
            return (
                <StyledDiv>
                    <p> البانكة تقترح عليك : تغيير الصندوق</p>
                </StyledDiv>
            );
        } else {
            return (
                <StyledDiv>
                    <p> البانكة تقترح عليك : {props.proposal} </p>
                </StyledDiv>
            );
        }
    }
    return renderPropSwal();
}

export default ProposalSwal;