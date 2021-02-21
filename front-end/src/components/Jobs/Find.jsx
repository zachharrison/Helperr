import "./Jobs.css";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FindListItem from "../JobList/FindListItem";

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
  const user = props.state.currentUser;
  const users = Object.values(props.state.users);

  return (
    <div className="find-container">
      <div className="category-box">
        <div className={classes.root}>
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
              />
            )}
          />
        </div>
      </div>
      <div>
        {jobsFiltered
          .filter((job) => job.client_id !== user)
          .map((job) => (
            <FindListItem
              {...job}
              job_id={job.id}
              categories={categories}
              users={users}
              onSave={props.saveOffer}
              setJobView={props.setJobView}
              state={props.state}
            />
          ))}
      </div>
    </div>
  );
}
