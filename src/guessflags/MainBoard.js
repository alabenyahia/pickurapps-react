import {Grid} from "@material-ui/core";
import styled from 'styled-components';
import TopHeader from "./TopHeader";

const StyledGridItem = styled(Grid)`
    max-width: 600px;
    margin: 16px auto;
    height: 100%;
    background: linear-gradient(0deg, #faaca8 0%, #ddd6f3 100%);
    min-height: calc(100vh - (64px + 32px));
    border-radius: 4px;
    overflow: auto;
    @media screen and (max-width: 600px) {
      min-height: calc(100vh - (56px + 32px));
    }
`;

function MainBoard() {

    return (
        <Grid container>
            <StyledGridItem item xs={12} >
                <TopHeader/>
            </StyledGridItem>
        </Grid>
    );
}

export default MainBoard;