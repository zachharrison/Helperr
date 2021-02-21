import "./Jobs.css";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FindJobListItem from "../JobList/JobListItem";
/******************** MAY NEED TO BE CHANGED LATER ***************************/
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
  const categories = Object.values(props.state.categories);
  const users = Object.values(props.state.users);

  return (
    <div className="find-container">
    <div className="category-box">
      <div className={classes.root} >
        <Autocomplete
          onChange={(event, value) => {
            setCategoryFilter(value || []);
          }}
          style={{ width: 450, marginBottom: 8 }}
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
              setJobView={props.setJobView}
            />
          )}
        />
      </div>
      </div>
      <div>
      {jobsFiltered.map((job) => (
        <FindJobListItem
          {...job}
          key={job.id}
          categories={categories}
          users={users}
          setJobView={props.setJobView}
          setProfile={props.setProfile}
        />
      ))}
      </div>
    </div>
  );
}
