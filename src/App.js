import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import Home from './pages/Home';

const theme = {
};

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
