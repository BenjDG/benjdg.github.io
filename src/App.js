import React from 'react';
import Home from './pages/Home';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Nav from './components/Nav';

const theme = createMuiTheme({
  spacing: 12
});

function App () {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Nav />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
