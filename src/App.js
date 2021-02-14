<<<<<<< HEAD
import React from 'react';
import Home from './pages/Home';

=======
import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import Home from './pages/Home';

const theme = {
};

>>>>>>> 0bf3d99... add new picture
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
