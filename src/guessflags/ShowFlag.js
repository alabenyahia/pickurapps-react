import styled from "styled-components";
import {Button, Icon} from "@material-ui/core";
import {SouthAmerica} from "./gameData";
const StyledShowFlagContainer = styled.div`
  width: 60%;
  background-color: #7D5A5A;
  margin: 32px auto;
  border-radius: 6px;
  color: #ffffff;
  text-align: center;
  box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%);
  @media screen and (max-width: 960px) {
    width: 70%;
  }
`;


function ShowFlag() {
    let ii = new SouthAmerica(false, 1);

    return (
        <StyledShowFlagContainer>
            <div style={{padding: '6px 0'}}>Flag of which country?</div>
            <div><img src={ii.flags[0].imgSrc} alt=""/></div>
            <div><Button fullWidth color="inherit">Next flag (20 coins)<Icon>navigate_next</Icon></Button></div>
        </StyledShowFlagContainer>
    );
}

export default ShowFlag;