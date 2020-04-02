// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Carousel from "./Carousel";
import News from './../News';
import CalendarEmbed from './../CalendarEmbed';
import EventsEmbed from './../EventsEmbed';


const Home = () => {
  const { isAuthenticated } = useAuth0();

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      display: "flex",
      flexWrap: "wrap",
      backgroundColor: 'rgb(255, 230, 204)',
    },
    paper: {
      padding: theme.spacing(2),
      margin: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor: " offwhite"
    },
    contentContainer: {
      margin: "30px"
    },
    banner: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      //color: "black",
      height: "302px",
      //backgroundColor: " rgba(0, 174, 88,50)",
    }
  }));

  const classes = useStyles();

  return (
    <>
      {/* {isAuthenticated && <h1> Welcome! </h1>   //ugly} */}

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid container className={classes.contentContainer} item xs={12}>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <Carousel />
              </Paper>
            </Grid>

            <Grid item xs={8}>
              <Paper className={classes.paper}>
                <div className={classes.banner}>
                  <h1> Introductory Title!</h1>
                  <br />
                  <h3> Some other information.</h3>
                  <br />
                </div>
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <News />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <CalendarEmbed />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <EventsEmbed />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>chat function</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>footer</Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;

/////
