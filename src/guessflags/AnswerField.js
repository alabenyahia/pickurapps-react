import styled from "styled-components";

const StyledAnswerContainer = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    width: 70%;
  }
`;

const StyledAnswerInput = styled.div`
  background-color: white;
  color: #7D5A5A;
  border-radius: 4px;
  padding: 10px;
  margin-right: 10px;
  display: inline-block;
  flex: 1;
  text-align: center;
  pointer-events: none;
`;

const StyledResetBtn = styled.div`
  background-color: #7D5A5A;
  color: white;
  border-radius: 4px;
  padding: 10px 16px;
  cursor: pointer;
  display: inline-block;
  font-size: 0.875rem;
  user-select: none;

  &:hover {
    background-color: #6E4D4D;
  }
`;

function AnswerField(props) {
    const handleResetBtnClick = () => {
        // set player answer to empty & set reset visibility state to true
        props.setAnswText("");
        props.setResetVisibility(true);
    }

    return (
        <StyledAnswerContainer>
            <StyledAnswerInput>{props.text}</StyledAnswerInput>
            <StyledResetBtn onClick={() => handleResetBtnClick()}>RESET</StyledResetBtn>
        </StyledAnswerContainer>
    );
}

export default AnswerField;