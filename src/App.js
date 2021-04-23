import React from 'react';
import Home from './pages/Home';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Nav from './components/Nav';
import { CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0065ff',
    },
    secondary: {
      main: '#fe0404'
    },
    background: {
      paper: '#fff',
      default: '#fff'
    }
  },
  spacing: 12,
  typography: {
    fontSize: 16,
    fontFamily: [
      'serif'
    ]
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': ['serif']
      }
    }
  }
});

function App () {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
