import styled from "styled-components";
import TunisiaFlag from './imgs/flags/africa/10.svg'
import {Button, Icon} from "@material-ui/core";
const StyledShowFlagContainer = styled.div`
  width: 60%;
  background-color: #7D5A5A;
  margin: 32px auto;
  border-radius: 6px;
  color: #ffffff;
  text-align: center;
  @media screen and (max-width: 960px) {
    width: 70%;
  }
`;


function ShowFlag() {

    return (
        <StyledShowFlagContainer>
            <div style={{padding: '6px 0'}}>Flag of which country?</div>
            <div><img src={TunisiaFlag} alt=""/></div>
            <div><Button fullWidth color="inherit">Next flag (20 coins)<Icon>navigate_next</Icon></Button></div>
        </StyledShowFlagContainer>
    );
}

export default ShowFlag;