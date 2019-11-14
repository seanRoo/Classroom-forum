import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  TextField,
  FormControl,
  Button,
  Container,
  InputLabel,
  Select,
  MenuItem,
  Grid
} from "@material-ui/core";

// WARNING THIS IS THE OLD PAGE - ONLY USE FOR REFERENCE :D 

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  formcontrol: {
    display: "block",
    minWidth: "120px"
  },
}));

export default function CreatePost() {
  const classes = useStyles();
  
  const inputProps = { fullWidth: true};

  const [age, setAge] = React.useState("");

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setAge(event.target.value);
  };

  const submitForm = event => {
    alert("form submitted");
  };

  return (
    <div>
      <h1>Create a post</h1>
      
      <form onSubmit={submitForm}>
        
            <FormControl className={classes.formcontrol} fullWidth={true}>
              <TextField
                id="outlined-basic"
                label="Title"
                margin="normal"
                variant="outlined"
                helperText="Enter an informative title"
                fullWidth
              />
            </FormControl>
          
            <FormControl variant="outlined" className={classes.formControl} fullWidth>
              <InputLabel
                ref={inputLabel}
                id="demo-simple-select-outlined-label"
              >
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                labelWidth={labelWidth}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Math"}>Math</MenuItem>
                <MenuItem value={"Science"}>Science</MenuItem>
                <MenuItem value={"Social Studies"}>Social Studies</MenuItem>
                <MenuItem value={"General"}>General</MenuItem>
              </Select>
            </FormControl>
         
            <FormControl className={classes.formcontrol} fullWidth={true}>
              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows="10"
                margin="normal"
                variant="outlined"
                helperText="Here is the body"
                fullWidth
              />
            </FormControl>
          

          {/* <Button variant="outlined" className={classes.button}
            onClick={submitForm}>
            Default
          </Button> */}
          <input type="submit" value="Submit" />
        
      </form>
    </div>
  );
}
