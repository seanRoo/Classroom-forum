import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    
  },
  formControl: {
   // margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function AddressForm() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="topicTitle"
              className={classes.textField}
              name="Title"
              label="Title"
              fullWidth
              autoComplete="title"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl variant="outlined" className={classes.formControl} fullWidth = "true">
              
              <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">Category</InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange('age')}
                labelWidth={labelWidth}
                
                inputProps={{
                  name: 'age',
                  id: 'outlined-age-native-simple',
                }}
              >
                <option value="" />
                <option value={"Math"}>Math</option>
                <option value={"Science"}>Science</option>
                <option value={"Civics"}>Civics</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="topicDesc"
              name="Description"
              multiline
              label="Description"
              className={classes.textField}
              fullWidth
              rows="10"
              autoComplete="Description"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    </form>

  );
}
