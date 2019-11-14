import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  grid: {
    border: "black1px"
  },
  paper: {
      width: "50%"
  }
}));

export default function TopicHeader() {
  const classes = useStyles();

  return (
    <Container maxWidth={"md"}>
      <Grid container className={classes.grid}>
          <Grid item xs={8}>
            Title
          </Grid>
          <Grid item xs={4}>
            Author
          </Grid>
          <Grid item xs={8}>
            Description
          </Grid>
          <Grid item xs={4}>
            Date
          </Grid>
      </Grid>
    </Container>
  );
}
