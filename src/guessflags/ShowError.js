import styled from "styled-components"
import {NavLink} from "react-router-dom";
import {Icon} from "@material-ui/core";

const StyledDiv = styled.div`
  background-color: #ff4444;
  padding: 16px;
  margin: 24px 0;
  color: white;
  text-align: center;
  line-height: 2rem;
`;

const StyledBtn = styled.div`
    background-color: #ffffff;
    color: #7D5A5A;
    padding: 12px 0;
    border: 0;
    border-radius: 6px;
    display: inline-flex;
    justify-content: center;
    margin: 0 2%;
    width: 96%;
    text-align: center;
`;

function ShowError() {

    return (
        <>
            <StyledDiv>
                Please choose a continent first.<br />
                Redirected after 5 secondes.
            </StyledDiv>
            <NavLink to='/guessflags' exact style={{textDecoration: 'none'}}>
                <StyledBtn><Icon>arrow_back_ios</Icon>BACK NOW</StyledBtn>
            </NavLink>
        </>
    );
}

export default ShowError;