import React from 'react';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from './Nav';
import home1 from "../assets/images/home1.jpg"
import SwipeableTextMobileStepper from './carru';

const home = () => {
  return (
    <>
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

    <SwipeableTextMobileStepper />
    </>
  )
}

export default home