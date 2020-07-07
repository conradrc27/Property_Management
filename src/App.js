import React from "react";
import ListaInmobiliaria from "./components/views/ListaInmobiliaria";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import theme from "./theme/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppNavbar from "./components/layout/AppNavbar";

import RegistrarUsuario from './components/seguridad/RegistrarUsuario';

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <AppNavbar/>
        <Grid container>
            <Switch>
                <Route path="/" exact component={ListaInmobiliaria} />
                <Route path="/auth/registrarUsuario" exact component={RegistrarUsuario} />
            </Switch>
        </Grid>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
