import {Grid} from "@material-ui/core";
import styled from 'styled-components';
import bgImg from './imgs/bg.jpg';

const StyledGridContainer = styled(Grid)`
    flex: 1;
    justify-content: center;
    align-content: center;
    flex-direction: column;
`;

const StyledGridItem = styled(Grid)`
    max-width: 1000px;
    max-height: 550px;
    width: 100%;
    margin: 16px 0;
    background-image: url(${bgImg});
    flex: 1;
    border-radius: 1rem;
    color: #ffffff;
    overflow: auto;
    box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%);
    font-family: "Lalezar", sans-serif;
    display: flex;
`;

function MainBoard(props) {

    return (
        <StyledGridContainer container>
            <StyledGridItem item xs={12} >
                {props.children}
            </StyledGridItem>
        </StyledGridContainer>
    );
}

export default MainBoard;