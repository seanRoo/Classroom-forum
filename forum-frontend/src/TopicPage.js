import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopicHeader from './TopicHeader'

  const useStyles = makeStyles(theme => ({
    grid: {
        border: "black 1px"
    }
  }));

export default function TopicPage(){

    const classes = useStyles();

    return (
        <div>
            <TopicHeader/>
            <TopicHeader/>
            <TopicHeader/>
        </div>
    );
}