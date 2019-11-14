import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
          width: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
        paper: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            padding: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
              marginTop: theme.spacing(6),
              marginBottom: theme.spacing(6),
              padding: theme.spacing(3),
            },
          },
      },
}));

export default function TopicBar() {
  const classes = useStyles();

  return (
    <div style={{"padding":"5px"}}>
      {/* <Container maxWidth="sm"> */}
      <main className={classes.layout}>
          <Paper className={classes.paper}>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant={"h5"} align={"left"} display={"inline"}>
                Title
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant={"subtitle1"} align={"right"}>
                Author
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant={"body1"} align={"left"} display={"inline"}>
                Dexcripion
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant={"subtitle1"} align={"right"}>
                Date
              </Typography>
            </Grid>
        </Grid>
        </Paper>
        </main>
      {/* </Container> */}
    </div>
  );
}
