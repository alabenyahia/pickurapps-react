import styled from "styled-components";
import {Icon} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const StyledCard = styled.div`
  background-color: #7D5A5A;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%);
  width: 100%;
  color: white;
  text-align: center;
`;

const StyledCardImgContainer = styled.div`
  font-size: 60px; 
  height: 60px; 
  padding: 24px 0;
`;


const StyledCardText = styled.div`
  background-color: #6E4D4D;
  padding: 12px 4px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;





function StageCard() {

    return (
        <NavLink to='/guessflags/game' exact style={{textDecoration: "none"}}>
            <StyledCard>
                <StyledCardImgContainer>
                    <Icon fontSize='inherit' color='inherit'>lock</Icon>
                </StyledCardImgContainer>
                <StyledCardText>South America</StyledCardText>
            </StyledCard>
        </NavLink>
    );
}

export default StageCard;