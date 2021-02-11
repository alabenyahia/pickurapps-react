import styled from "styled-components";
import {useHistory, useParams} from "react-router-dom";

const StyledDiv = styled.div`
  background-color: #7D5A5A;
  color: #ffffff;
  padding: 1rem;
  margin: 2rem 0;
  font-size: 1.8rem;
  text-align: center;
  line-height: 2.5rem;
`;

const StyledBtn = styled.button`
  border: none;
  background-color: ${props => props.reset ? '#7D5A5A' : '#ffffff'};
  color: ${props => props.reset ? '#ffffff' : '#7D5A5A'};
  padding: 1rem 2rem;
  margin-right: ${props => props.reset ? '1rem' : '0'};
  border-radius: 6px;
  cursor: pointer;
  transition: transform 150ms ease-in;

  &:hover {
    background-color: ${props => props.reset ? '#6E4D4D' : '#e5e4e4'};
    transform: scale(1.07);
  }
`;

function TopHeader(props) {
    const {continent} = useParams();
    const history = useHistory();
    const handleResetClick = () => {
        let oldObj = {...props.contData};
        oldObj[continent].currFlagNum = 1;
        oldObj[continent].isCompleted = false;
        props.setContData(oldObj);
        history.push('/guessflags');
    }

    const handleDontResetClick = () => {
        history.push('/guessflags');
    }

    return (
        <>
            <StyledDiv>You have completed this continent wanna RESET it ?</StyledDiv>
            <div style={{textAlign: 'center'}}>
                <StyledBtn reset={true} onClick={()=>handleResetClick()}>RESET</StyledBtn>
                <StyledBtn reset={false} onClick={()=>handleDontResetClick()}>DON'T RESET</StyledBtn>
            </div>
        </>
    );
}

export default TopHeader;