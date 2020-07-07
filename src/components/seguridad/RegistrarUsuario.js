import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Avatar,
  Button,
} from "@material-ui/core";
import LockOutLineIcon from "@material-ui/icons/LockOutlined";

const style = {
  contents: {
    display: "contents",
  },
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: 8,
    backgroundColor: "#e53935",
  },
  form: {
    width: "100%",
    marginTop: 10,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  submit:{
      marginTop:30,
      marginBottom: 20 
  }
};

function RegistrarUsuario() {
    const [data, setData] = useState({
        nombre:'',
        apellido:'',
        email:'',
        password:''
    });

    const handleInputChange = ({target}) => {
        setData({
            ...data,
            [target.name] : target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(data.nombre + " : " + data.apellido + " : " + data.email + " : " + data.password);
        document.getElementById("form").reset();
    }

  return (
    <div style={style.contents}>
      <Container maxWidth="md">
        <div style={style.paper}>
          <Avatar style={style.avatar}>
            <LockOutLineIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registre su cuenta
          </Typography>
          <form id="form"     style={style.form} onClick={enviarDatos}>
            <Grid container spacing={2} style={style.center}>
              <Grid item md={6} xs={12}>
                <TextField name="nombre" fullWidth label="Ingrese su nombre" onChange={handleInputChange} />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField name="apellido" fullWidth label="Ingrese sus apellidos" onChange={handleInputChange}/>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField name="email" fullWidth label="Ingrese su e-mail" onChange={handleInputChange} />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField type="password"  name="password" fullWidth label="Ingrese su password" onChange={handleInputChange}/>
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item md={6} xs={12}>
                <Button type="submit" variant="contained" fullWidth size="large" color="primary" style={style.submit} >
                    Registrar
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default RegistrarUsuario;
