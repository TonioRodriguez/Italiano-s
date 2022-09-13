import React from "react";
import ResponsiveAppBar from "./Nav";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const Contacto = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <br />
      <br />
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" }
            }}
            noValidate
            autoComplete="off"
          >
            <div
              style={{
                width: "90%",
                backgroundColor: "#e3f0d3",
                padding: "10px"
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  item
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <TextField
                    id="Nombre"
                    label="Nombre"
                    color="warning"
                    placeholder="Nombre"
                    focused
                  />
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  item
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <TextField
                    placeholder="Asunto"
                    id="Asunto"
                    label="Asunto"
                    color="warning"
                    focused
                  />
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  item
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <TextField
                    id="Teléfono"
                    label="Teléfono"
                    placeholder="Teléfono"
                    color="warning"
                    focused
                  />
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  item
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <TextField
                    id="Email @"
                    label="Email @"
                    placeholder="Email @"
                    color="warning"
                    focused
                  />
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  item
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <TextField
                    id="Mensaje"
                    label="Mensaje"
                    placeholder="Mensaje"
                    color="warning"
                    focused
                  />
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  item
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <TextField
                    id="Adicional"
                    label="Adicional"
                    placeholder="Adicional"
                    color="warning"
                    focused
                  />
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  item
                  xs={12}
                >
                  <Button variant="contained" color="success">
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Contacto;