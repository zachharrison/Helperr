import { useCallback, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
// import clsx from "clsx";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Places from "../Places/Places";
import "./Jobs.css";
import "date-fns";

import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  // KeyboardTimePicker,
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
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [price, setPrice] = useState("");

  function onSubmit() {
    const job = {
      jobTitle,
      jobDescription,
      postalCode,
      jobCategory,
      price,
      hourly,
      selectedStartDate,
      selectedEndDate,
    };
    console.log(job);
  }

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
  };

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    if (mapRef.current) {
      mapRef.current.panTo({ lat, lng });
      mapRef.current.setZoom(14);
    }
  }, []);

  // `https://maps.googleapis.com/maps/api/geocode/json?address=${post_code},+CA&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
  return (
    <>
      <span>Post Help Request</span>
      <form action="">
        <TextField
          id="job-title"
          style={{ width: 450, margin: 8 }}
          label="Job"
          placeholder="What do you need help with?"
          fullWidth
          onChange={(event) => setJobTitle(event.target.value)}
        />
        <TextField
          id="job-descripton"
          name="job-descripton"
          style={{ width: 450, margin: 8 }}
          label="Description"
          placeholder="Details of your job"
          fullWidth
          multiline
          rowsMax="10"
          onChange={(event) => setJobDescription(event.target.value)}
        />
        <Autocomplete
          onChange={(event, value) => setJobCategory(value ? value.name : "")}
          id="category-search"
          name="category-search"
          options={categories}
          getOptionLabel={(option) => option.name}
          style={{ width: 450, margin: 8 }}
          renderInput={(params) => <TextField {...params} label="Category" />}
        />
        {/*         <TextField
          id="postal-code"
          name="postal-code"
          style={{ width: 450, margin: 8 }}
          label="Location"
          placeholder="Enter Postal Code"
          fullWidth
          onChange={(event) => setPostalCode(event.target.value)}
        /> */}
        <Places
          panTo1={props.panTo1}
          setCoord={props.setCoord}
          coord={props.coord}
        />
        <TextField
          label="Price"
          id="price"
          name="price"
          value={props.state.price}
          style={{ width: 315, margin: 8 }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          onChange={(event) => setPrice(event.target.value)}
        />
        <FormControl
          className={classes.formControl}
          onSubmit={(event) => event.preventDefault()}
        >
          <InputLabel id="pay-type">Pay Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="pay-type-select"
            name="pay-type-select"
            value={props.state.per_hr}
            onChange={handleChange}
          >
            <MenuItem value={"hourly"}>Hourly</MenuItem>
            <MenuItem value={"perJob"}>Per Job</MenuItem>
          </Select>
        </FormControl>
        <br />

        <TextField
          id="datetime-start-date"
          name="datetime-start-date"
          style={{ width: 218 }}
          label="Start Date"
          type="datetime-local"
          defaultValue="--"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="datetime-end-date"
          name="datetime-end-date"
          style={{ width: 218 }}
          label="End Date"
          type="datetime-local"
          defaultValue="--"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />

        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              style={{ width: 150, margin: 8 }}
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-start-date"
              name="date-picker-start-date"
              label="Start Date"
              value={selectedStartDate}
              onChange={handleStartDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardDatePicker
              style={{ width: 150, margin: 8, marginLeft: 30 }}
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-end-date"
              name="date-picker-end-date"
              label="End Date"
              value={selectedEndDate}
              onChange={handleEndDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider> */}

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
