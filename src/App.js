import Header from "./commons/Header";
import Footer from "./commons/Footer"
import theme from "./commons/theme";

import {ThemeProvider} from "@material-ui/core";
import {createGlobalStyle} from "styled-components";
import styled from "styled-components";
import Routing from "./commons/Routing";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
  }
  #root {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
`;

const StyledContainer = styled.main`
    width: 70%;
    margin: 24px auto;
    
    @media screen and (max-width: 960px) {
      width: calc(100% - 24px);
      margin: 16px auto;
    }
`;

function App() {
  return (
      <>
          <GlobalStyles/>
          <ThemeProvider theme={theme}>
            <Header/>
            <StyledContainer>
                <Routing/>
            </StyledContainer>
            <Footer/>
          </ThemeProvider>
      </>
  );
}

export default App;
