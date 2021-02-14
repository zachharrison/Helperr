import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import clsx from "clsx";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

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

export default function Post() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <span>Post Help Request</span>
      <form action="">
        <TextField
          id="standard-textarea"
          style={{ margin: 8 }}
          label="Job"
          placeholder="What do you need help with?"
          fullWidth
        />
        <TextField
          id="standard-textarea"
          style={{ margin: 8 }}
          label="Description"
          placeholder="Details of your job"
          fullWidth
          multiline
        />
        <Autocomplete
          id="combo-box-demo"
          options={categories}
          disableCloseOnSelect
          getOptionLabel={(option) => option.name}
          style={{ width: 300, margin: 8 }}
          renderInput={(params) => <TextField {...params} label="Category" />}
        />
        <TextField
          label="Price"
          id="standard-start-adornment"
          style={{ margin: 8 }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Pay Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={"hourly"}>Hourly</MenuItem>
            <MenuItem value={"perJob"}>Per Job</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary">
          Primary
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
