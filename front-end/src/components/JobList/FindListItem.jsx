import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Collapsible from "react-collapsible";
import "./JobList.css";

export default function FindListItem({
  name,
  helper_id,
  client_id,
  description,
  lat,
  lng,
  setCoord,
  price,
  pay_type,
  end_date,
  category_id,
  onSave,
  setJobView,
  state,
  job_id,
  setProfile,
}) {
  const [offerPrice, setOfferPrice] = useState(price);
  const [error, setError] = useState("");
  const classes = useStyles();

  const [offerPayType, setOfferPayType] = useState(pay_type);
  const handleChange = (event) => {
    setOfferPayType(event.target.value);
  };

  function application() {
    const newOffer = {
      helper_id: state.currentUser,
      job_id,
      price: offerPrice,
      pay_type: offerPayType,
      status: "PENDING",
    };
    if (helper_id === "") {
      setError("Please login");
      return;
    }
    setError("");
    onSave(newOffer);
    setJobView("ALL");
  }

  const categories = Object.values(state.categories);
  if (!categories) return null;

  const users = Object.values(state.users);
  const categoryName = categories[category_id - 1].name;
  const userAvatar = users[client_id - 1].avatar;
  const userName = users[client_id - 1].name;
  const formattedDate = (date) => {
    return Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
    }).format(new Date(date));
  };

  const handleProfileClick = () => {
    setJobView("PROFILE");
    setProfile(userName);
  };

  return (
    <div className="accordion-show">
      <div className="jobListItem">
        <div onClick={() => setCoord({ lat, lng })}>
          <div className="item-row">
            <h1 className="job-name">{name}</h1>
            <div className="pay">
              <h1>
                {categoryName} for ${price}
                {pay_type}
              </h1>
            </div>
          </div>
          <div className="small-profile" onClick={handleProfileClick}>
            <div className="profile-container">
              <img src={userAvatar} alt="profile" />
              <p className="username">{userName}</p>
            </div>
          </div>
          <div className="item-row">
            <h6 className="date">Expiry: {formattedDate(end_date)}</h6>
          </div>
        </div>
        <Collapsible
          trigger={
            <FontAwesomeIcon
              icon={faChevronDown}
              className="job-list-chevron"
            />
          }
        >
          <div className="item-row">
            <p className="job-description">{description}</p>
          </div>
          <div className="offer-options">
            <TextField
              label="Price"
              id="price"
              name="price"
              value={state.offerPrice}
              defaultValue={offerPrice}
              style={{ width: 100, margin: 8 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              onChange={(event) => setOfferPrice(event.target.value)}
              autoComplete="off"
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
                defaultValue={offerPayType}
                value={state.offerPayType}
                onChange={handleChange}
              >
                {console.log(state.jobs[job_id].pay_type)}
                <MenuItem value={"/hr"}>Per Hour</MenuItem>
                <MenuItem value={" total"}>Total</MenuItem>
              </Select>
            </FormControl>
            <button onClick={application} className="btn">
              Apply
            </button>
          </div>
        </Collapsible>
      </div>
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
