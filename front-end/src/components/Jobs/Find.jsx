import "./Jobs.css";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FindListItem from "../JobList/FindListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    margin: "auto",
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function Find({
  jobsFiltered,
  setCategoryFilter,
  state,
  setJobView,
  saveOffer,
  setCoord,
  selected,
  setSelected,
  setProfile,
}) {
  const classes = useStyles();
  const categories = Object.values(state.categories);

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
            options={categories}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Category"
                placeholder="Job Type"
                setJobView={setJobView}
              />
            )}
          />
        </div>
      </div>
      {jobsFiltered
        .filter((job) => job.client_id !== state.currentUser)
        .map((job) => (
          <FindListItem
            {...job}
            job_id={job.id}
            onSave={saveOffer}
            setJobView={setJobView}
            state={state}
            setCoord={setCoord}
            isSelected={selected && selected.id === job.id}
            setSelected={setSelected}
            setProfile={setProfile}
          />
        ))}
    </div>
  );
}
