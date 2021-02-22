import { useState } from "react";
import Button from "@material-ui/core/Button";
import './JobList.css'

export default function FindListItem(props) {
  const {
    name,
    helper_id,
    client_id,
    description,
    price,
    pay_type,
    start_time,
    end_time,
    category_id,
    categories,
    users,
    onSave,
    setJobView,
    jobView,
    state,
    job_id,
    status,
    setProfile,
  } = props;

  const [error, setError] = useState("");
  function application() {
    const newOffer = {
      helper_id: props.state.currentUser,
      job_id,
      price,
      pay_type,
      status: "SENT",
    };
    if (helper_id === "") {
      setError("Please login");
      return;
    }
    setError("");
    onSave(newOffer);
    setJobView("ALL");
  }

  if (!categories) return null;

  const categoryName = categories[category_id - 1].name;
  const userAvatar = users[client_id - 1].avatar;
  const userName = users[client_id - 1].name;
  const formattedDate = (date) => {
    return Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date));
  };

  const handleProfileClick = () => {
    setJobView('PROFILE')
     setProfile(userName)
  };

  return (
    <div className="jobListItem">
      <div className="item-row">
        <h1>{name}</h1>
        <div className="pay">
          <p className="rate">
            ${price}
            {pay_type}
          </p>
        </div>
      </div>
      <div className="item-row">
      <div className="profile-container">
        <img src={userAvatar} alt="profile" />
        <button onClick={handleProfileClick} className="profile-btn">View Profile</button>
        </div>
        <div className="pay">
          <h1 className="rate">{userName}</h1>
        </div>
      </div>
      <div className="item-row">
        <p className="date">{categoryName}</p>
      </div>
      <div className="item-row">
        <p className="date">{description}</p>
      </div>
      <div className="item-row">
        <h6 className="date">
          {formattedDate(start_time)}
          -to-
          {formattedDate(end_time)}
        </h6>
      </div>
      {status}
      {/* {state.jobView === "FIND" && ( */}
      <Button
        onClick={application}
        variant="contained"
        color="primary"
        style={{ margin: 8 }}
      >
        Apply
      </Button>
    </div>
  );
}
