import React from "react";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListaInmobiliaria from "./components/views/ListaInmobiliaria";
import RegistrarUsuario from './components/seguridad/RegistrarUsuario';
import AppNavbar from "./components/layout/AppNavbar";
import Grid from "@material-ui/core/Grid";
import theme from "./theme/theme";

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
