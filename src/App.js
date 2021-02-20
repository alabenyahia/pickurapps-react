import Header from "./commons/Header";
import Footer from "./commons/Footer"
import theme from "./commons/theme";

import {ThemeProvider} from "@material-ui/core";
import {createGlobalStyle} from "styled-components";
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
    overflow-x: hidden;
  }
`;



function App() {
  return (
      <>
          <GlobalStyles/>
          <ThemeProvider theme={theme}>
            <Header/>
            <Routing/>
            <Footer/>
          </ThemeProvider>
      </>
  );
}

export default App;
