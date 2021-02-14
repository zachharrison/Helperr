import { useState, setState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./Jobs.css";
import "date-fns";

import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const categories = [
  {
    id: 1,
    name: "Light-labour",
  },
  {
    id: 2,
    name: "Cleaning",
  },
  {
    id: 3,
    name: "Caregiving",
  },
  {
    id: 4,
    name: "AutoRepair",
  },
  {
    id: 5,
    name: "MinorRepair",
  },
  {
    id: 6,
    name: "Photography",
  },
  {
    id: 7,
    name: "Lessons",
  },
  {
    id: 8,
    name: "Delivery",
  },
  {
    id: 9,
    name: "Miscellaneous",
  },
];
/* 
function onPin() {
  if (name === "" && interviewer === null) {
    setError("Student name and Instructor selection cannot be blank");
    return;
  } else if (name === "") {
    setError("Student name cannot be blank");
    return;
  } else if (interviewer === null) {
    setError("Instructor selection cannot be blank");
    return;
  }
  setError("");
  props.onSave(name, interviewer);
} */
function onSubmit() {

}
export default function Post(props) {
  const classes = useStyles();
  const [hourly, setHourly] = useState();
  const handleChange = (event) => {
    setHourly(event.target.value);
  };
  const [selectedStartDate, setSelectedStartDate] = useState(
    new Date("2021-02-18T21:11:54")
  );
  const [selectedEndDate, setSelectedEndDate] = useState(
    new Date("2021-02-18T21:11:54")
  );

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
  };
  // `https://maps.googleapis.com/maps/api/geocode/json?address=${post_code},+CA&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
  return (
    <>
      <span>Post Help Request</span>
      <form action="">
        <TextField
          id="standard-textarea"
          style={{ width: 450, margin: 8 }}
          label="Job"
          placeholder="What do you need help with?"
          fullWidth
        />
        <TextField
          id="standard-textarea"
          // value={props.state.per_hr}
          style={{ width: 450, margin: 8 }}
          label="Description"
          placeholder="Details of your job"
          fullWidth
          multiline
          rowsMax="10"
        />
        <Autocomplete
          id="combo-box-demo"
          value={props.state.category}
          options={categories}
          getOptionLabel={(option) => option.name}
          style={{ width: 450, margin: 8 }}
          renderInput={(params) => <TextField {...params} label="Category" />}
        />
          <TextField
          id="standard-textarea"
          // value={props.state.per_hr}
          style={{ width: 450, margin: 8 }}
          label="Location"
          placeholder="Enter Postal Code"
          fullWidth
        />
        <TextField
          label="Price"
          id="standard-start-adornment"
          value={props.state.price}
          style={{ width: 315, margin: 8 }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Pay Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.state.per_hr}
            onChange={handleChange}
          >
            <MenuItem value={"hourly"}>Hourly</MenuItem>
            <MenuItem value={"perJob"}>Per Job</MenuItem>
          </Select>
        </FormControl>
        <br />
        <form className={classes.container} noValidate>
          <TextField
            id="datetime-local"
            style={{ width: 145 }}
            label="Start Date"
            // type="datetime-local"
            type="date"
            defaultValue="--"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="time"
            style={{ width: 55 }}
            label="Time"
            type="time"
            defaultValue="--"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
          <TextField
            id="datetime-local"
            style={{ width: 145 }}
            label="End Date"
            // type="datetime-local"
            type="date"
            defaultValue="--"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="time"
            style={{ width: 55 }}
            label="Time"
            type="time"
            defaultValue="--"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </form>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Start Date"
              value={selectedStartDate}
              onChange={handleStartDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="End Date"
              value={selectedEndDate}
              onChange={handleEndDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>

        <br />
        <Button
          onClick={onSubmit}
          variant="contained"
          color="primary"
          style={{ margin: 8 }}
        >
          HELP ME!!!
        </Button>
      </form>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));
