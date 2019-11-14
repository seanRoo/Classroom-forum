import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopicBar from "./TopicBar";
import { Typography, Paper, Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  grid: {
    border: "black 1px"
  }
}));

export default function TopicPage() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="med">
        <Paper>
          <Typography component="h1" variant="h4" align="center">View topics</Typography>
          <TopicBar />
          <TopicBar />
          <TopicBar />
        </Paper>
      </Container>
    </div>
  );
}
