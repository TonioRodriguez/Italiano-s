import React from 'react';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from './Nav';
import home1 from "../assets/images/home1.jpg";
import Carousel from "./Carousel"



const home = () => {

  return (
    <div>
      <ResponsiveAppBar />

      <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center" >
        <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center"
          item xs={12}>
          {<img src={home1} alt="Italiano's"/>}
        </Grid>
      </Grid>

      <br />
      <br />

      <Carousel /> 
    </div>
  )
  }
  
export default home