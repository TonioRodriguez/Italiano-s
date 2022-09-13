import React from "react";
import ResponsiveAppBar from "./Nav";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import bolgn from "../assets/images/bolgn.jpg"
import cane from "../assets/images/cane.jpg"
import cesar from "../assets/images/cesar.jpg"
import crosti from "../assets/images/crosti.jpg"
import frita from "../assets/images/frita.jpg"
import hawai from "../assets/images/hawai.jpg"
import lasagna from "../assets/images/lasagna.jpg"
import pepper from "../assets/images/pepper.jpg"
import pesto from "../assets/images/pesto.jpg"
import queso from "../assets/images/queso.jpg"
import tiram from "../assets/images/tiram.jpg"
import vegie from "../assets/images/vegie.jpg"

const Menu = () => {
  return (
    <div>
      <ResponsiveAppBar />

      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
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
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image= {pepper}
                      alt="Pizza de Pepperoni"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Pizza de Pepperoni
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        La más famosa! Pizza recién salida del horno, hecha con
                        la masa más fresca y los ingredientes de la mas alta
                        calidad.
                      </Typography>
                      <br />
                      <Chip label="$150" color="success" />
                    </CardContent>
                  </Card>
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
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={hawai}
                      alt="Pizza Hawaiana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Pizza Hawaiana
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Pizza recién salida del horno, hecha con la masa más
                        fresca y los ingredientes de la mas alta calidad. El
                        clásico sabor tropical!
                      </Typography>
                      <br />
                      <Chip label="$150" color="success" />
                    </CardContent>
                  </Card>
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
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={vegie}
                      alt="Pizza Vegetariana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Pizza Vegetariana
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ¿Amante de los vegetales? Pizza recién salida del horno,
                        hecha con la masa más fresca y los ingredientes de la
                        mas alta calidad.
                      </Typography>
                      <br />
                      <Chip label="$150" color="success" />
                    </CardContent>
                  </Card>
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
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={bolgn}
                      alt="Spaghetti Bolognesa"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Spaghetti Bolognesa
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Ahora con carne y salsa de tomate!! Este platillo está
                        hecho con la pasta casera tradicional de Italiano's
                      </Typography>
                      <br />
                      <Chip label="$200" color="success" />
                    </CardContent>
                  </Card>
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
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={pesto}
                      alt="Spaghetti Al Pesto"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Spaghetti Al Pesto
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Una esquisita combinación de una salsa tradicional y verduras!! Este platillo está hecho con la pasta
                        casera tradicional de Italiano's
                      </Typography>
                      <br />
                      <Chip label="$200" color="success" />
                    </CardContent>
                  </Card>
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
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={queso}
                      alt="Spaghetti 4 Quesos"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Spaghetti 4 Quesos
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Para los amantes del queso!! Este platillo está hecho con la pasta
                        casera tradicional de Italiano's
                      </Typography>
                      <br />
                      <Chip label="$200" color="success" />
                    </CardContent>
                  </Card>
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
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={lasagna}
                      alt="Lasagna"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lasagna
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Excelente opción si te gusta la carne y el queso !! Este platillo está hecho con la pasta
                        casera tradicional de Italiano's
                      </Typography>
                      <br />
                      <Chip label="$200" color="success" />
                    </CardContent>
                  </Card>
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
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={cane}
                      alt="Canelones"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Canelones
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      Los canelones son una pasta ancha de forma rectangular que se emplea a menudo en la cocina italiana 
                      para hacer platos con carne picada, pescado, verdura, requesón o espinacas en su interior!!!
                      </Typography>
                      <br />
                      <Chip label="$170" color="success" />
                    </CardContent>
                  </Card>
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
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={cesar}
                      alt="Ensalada César"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Ensalada César
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Eres fit?? No dejes de probar esta opción aderazada con una salsa casera!!!
                      </Typography>
                      <br />
                      <Chip label="$130" color="success" />
                    </CardContent>
                  </Card>
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
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={frita}
                      alt="Frittata"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Frittata
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      La frittata​ es una especialidad de la cocina italiana similar a la tortilla Española 
                      y que se suele rellenar de diferentes ingredientes tales como vegetales, quesos, embutidos, setas, etc.
                      </Typography>
                      <br />
                      <Chip label="$130" color="success" />
                    </CardContent>
                  </Card>
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
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={tiram}
                      alt="Tiramisú"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Tiramisú
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      El tiramisú es un pastel frío que se monta en capas. No existe una receta única de elaboración, 
                      sino variantes a partir de una serie de ingredientes base que pueden ser representados por distintos productos
                      </Typography>
                      <br />
                      <Chip label="$200" color="success" />
                    </CardContent>
                  </Card>
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
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={crosti}
                      alt="Crostini"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Crostini
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      Los crostini es un aperitivo italiano consistente en pequeñas rodajas de pan tostado o a la
                       parrilla con ingredientes encima. Estos pueden incluir una variedad de diferentes quesos, carnes y verduras
                      </Typography>
                      <br />
                      <Chip label="$250" color="success" />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Menu;