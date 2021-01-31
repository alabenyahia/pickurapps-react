import styled from "styled-components";

const StyledContainer = styled.main`
    width: 70%;
    margin: 24px auto;
    
    @media screen and (max-width: 960px) {
      width: calc(100% - 24px);
      margin: 16px auto;
    }
`;

export default StyledContainer;