import "./Jobs.css";

/* eslint-disable no-use-before-define */
import { useState } from "react";
import Chip from "@material-ui/core/Chip";
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

export default function Find() {
  const classes = useStyles();
  const [selectedCategories, setSelectedCategories] = useState("");

  return (
    <>
      <div className={classes.root}>
        <Autocomplete
          onChange={(event, value) => console.log(value)}
          style={{ width: 450, margin: 8 }}
          multiple
          id="filter-categories"
          options={categories}
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
