import "./Jobs.css";
// import { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import JobListItem from "../JobList/JobListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function Find(props) {
  const classes = useStyles();
  // const [selectedCategories, setSelectedCategories] = useState("");

  return (
    <>
      <div className={classes.root}>
        <Autocomplete
          onChange={(event, value) => console.log(value)}
          style={{ width: 450, margin: 8 }}
          multiple
          id="filter-categories"
          options={Object.values(props.state.categories)}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Category"
              placeholder="Job Type"
            />
          )}
        />
      </div>
      <JobListItem />
      <JobListItem />
    </>
  );
}
