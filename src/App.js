import React from "react";
import ListaInmobiliaria from './components/ListaInmobiliaria';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme/theme';

function App() {
  return <div>
    <MuiThemeProvider theme={theme}>
        <ListaInmobiliaria/>
    </MuiThemeProvider>
  </div>;
}

export default App;
