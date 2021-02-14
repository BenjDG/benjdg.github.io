import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Projects from './pages/Projects';
import Nav from './components/Nav';
import ContactMe from './pages/ContactMe';
import Footer from './components/Footer';

const theme = createMuiTheme({
  spacing: 12
});

function App () {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Nav />
        <Router>
          <Route exact strict path='/'>
            <Home />
          </Route>
          <Route exact strict path='/projects'>
            <Projects />
          </Route>
          <Route exact strict path='/contact'>
            <ContactMe />
          </Route>
        </Router>
        <Footer />
      </ThemeProvider>

    </div>
  );
}

export default App;
