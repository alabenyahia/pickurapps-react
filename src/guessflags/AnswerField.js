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
`;

function AnswerField(props) {

    return (
        <StyledAnswerContainer>
            <StyledAnswerInput>{props.text}</StyledAnswerInput>
            <StyledResetBtn>RESET</StyledResetBtn>
        </StyledAnswerContainer>
    );
}

export default AnswerField;