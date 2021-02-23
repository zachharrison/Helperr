import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputAdornment from "@material-ui/core/InputAdornment";
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
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function Post(props) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category_id, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [pay_type, setPayType] = useState("");
  const [start_time, setStartDate] = useState(new Date()); // new Date("2021-02-18T21:11:54")
  const [end_time, setEndDate] = useState(new Date());

  const [error, setError] = useState("");

  function validate() {
    const newJob = {
      client_id: props.state.currentUser,
      name,
      category_id,
      description,
      lat: props.coord.lat,
      lng: props.coord.lng,
      price,
      pay_type,
      status: "POSTED",
      start_time,
      end_time,
    };
    if (
      name === "" ||
      category_id === "" ||
      description === "" ||
      price === "" ||
      pay_type === "" ||
      start_time === "" ||
      end_time === ""
    ) {
      setError("Please fill out some stuff but not everything.. idk");
      return;
    }
    setError("");
    props.onSave(newJob);
    // props.setJobView("ALL");
  }
  const handleChange = (event) => {
    setPayType(event.target.value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div className="post-form">
      {/* <span>Post Help Request</span> */}
      <form action="">
        <TextField
          id="job-name"
          style={{ width: 450, margin: 8 }}
          label="Job"
          placeholder="What do you need help with?"
          fullWidth
          onChange={(event) => setName(event.target.value)}
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
          onChange={(event) => setDescription(event.target.value)}
        />
        <Autocomplete
          onChange={(event, value) => setCategory(value ? value.id : "")}
          id="category-search"
          name="category-search"
          value={props.state.category_id}
          options={Object.values(props.state.categories)}
          getOptionLabel={(option) => option.name}
          style={{ width: 450, margin: 8 }}
          renderInput={(params) => <TextField {...params} label="Category" />}
        />
        <Places setCoord={props.setCoord} coord={props.coord} />
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
            value={props.state.pay_type}
            onChange={handleChange}
          >
            <MenuItem value={"/hr"}>Per Hour</MenuItem>
            <MenuItem value={" total"}>Total</MenuItem>
          </Select>
        </FormControl>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              style={{ width: 145, margin: 8 }}
              disableToolbar
              variant="inline"
              format="yyyy/MM/dd"
              margin="normal"
              label="Start Date"
              value={start_time}
              onChange={handleStartDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardTimePicker
              style={{ width: 100, margin: 8 }}
              margin="normal"
              label="Start Time"
              value={start_time}
              onChange={handleStartDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
            <br />
            <KeyboardDatePicker
              style={{ width: 145, margin: 8 }}
              disableToolbar
              variant="inline"
              format="yyyy/MM/dd"
              margin="normal"
              label="End Date"
              value={end_time}
              onChange={handleEndDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardTimePicker
              style={{ width: 100, margin: 8 }}
              margin="normal"
              label="End Time"
              value={end_time}
              onChange={handleEndDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <br />
        <span>{error}</span>
        {/* <Button
          onClick={validate}
          variant="contained"
          color="primary"
          style={{ margin: 8 }}
        >
          HELP ME!!!
        </Button> */}
        <button onClick={validate} className="btn">POST</button>
      </form>
    </div>
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
