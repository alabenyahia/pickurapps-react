import styled from "styled-components";
import {IconButton} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import coloredCoins from "./imgs/coin-colored.svg";
const StyledHeader = styled.div`
  background-color: #7D5A5A;
  padding: 16px;
  display: flex;
  color: #ffffff;
  align-items: center;
  justify-content: space-between;
`;

function TopHeader() {

    return (
        <StyledHeader>
            <IconButton size="small" aria-label="back" color="inherit">
                <ArrowBackIcon />
            </IconButton>
            <p style={{margin:0}}>1/10</p>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <span style={{marginRight: '8px'}}>2000</span><img width={28} height={28} src={coloredCoins} alt="colored-coins"/>
            </div>
        </StyledHeader>
    );
}

export default TopHeader;