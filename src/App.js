import Header from "./Header";
import Footer from "./Footer"
import theme from "./theme";

import {ThemeProvider} from "@material-ui/core";
import {createGlobalStyle} from "styled-components";

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

function App() {
  return (
      <>
          <GlobalStyles/>
          <ThemeProvider theme={theme}>
            <Header/>
            <Footer/>
          </ThemeProvider>
      </>
  );
}

export default App;
