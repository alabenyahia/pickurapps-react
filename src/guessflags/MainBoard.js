import {Grid} from "@material-ui/core";
import styled from 'styled-components';

const StyledGridItem = styled(Grid)`
  max-width: 600px;
  margin: 16px auto;
  background: linear-gradient(0deg, #faaca8 0%, #ddd6f3 100%);
  height: calc(100vh - (64px + 32px));
  border-radius: 4px;
  overflow: auto;
  box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%);

  @media screen and (max-width: 960px) {
    max-width: 500px;
  }

  @media screen and (max-width: 600px) {
    height: calc(100vh - (56px + 32px));
  }
`;

function MainBoard(props) {

    return (
        <Grid container>
            <StyledGridItem item xs={12}>
                {props.children}
            </StyledGridItem>
        </Grid>
    );
}

export default MainBoard;