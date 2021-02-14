import React from "react";
import Home from './pages/Home';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  spacing: 12,
})

function App () {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>

    </div>
  );
}

export default App;
