import "./Jobs.css";
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
  const { jobsFiltered, setCategoryFilter } = props;
  const classes = useStyles();

  return (
    <>
    <div className="category-box">
      <div className={classes.root}>
        <Autocomplete
          onChange={(event, value) => {
            setCategoryFilter(value || []);
          }}
          style={{ width: 450, margin: 8 }}
          multiple
          id="filter-categories"
          options={Object.values(props.state.categories)}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard" // whats this
              label="Category"
              placeholder="Job Type" // whats this
            />
          )}
        />
      </div>
    </div>
      {jobsFiltered.map((job) => (
        <JobListItem {...job} />
      ))}
    </>
  );
}
