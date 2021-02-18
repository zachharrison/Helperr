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
  const [jobCategory, setJobCategory] = useState("");
  const [price, setPrice] = useState("");

  function validate() {
    const newJob = {
      jobTitle,
      jobDescription,
      // jobCategory,
      // price,
      // hourly,
      // selectedStartDate,
      // selectedEndDate,
    };
    console.log(newJob);

    /*     if (
      jobTitle === "" ||
      jobDescription === "" ||
      jobCategory === "" ||
      price === "" ||
      hourly === ""
    ) {
      console.log(
        "Required Post form item left blank, consider using shceduler setError"
      );
    } */
    console.log("newJob from post ForM", newJob);
    props.onSave(newJob);
  }

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
  };

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
          value={selectedStartDate}
          onChange={handleStartDateChange}
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
          value={selectedEndDate}
          onChange={handleEndDateChange}
          type="datetime-local"
          defaultValue="--"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br />
        <Button
          onClick={validate}
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
