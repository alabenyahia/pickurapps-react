import Header from "./Header";
import theme from "./theme";
import {ThemeProvider} from "@material-ui/core";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Header/>
      </ThemeProvider>
  );
}

export default App;
