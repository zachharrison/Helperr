import { useState } from "react";
import Button from "@material-ui/core/Button";
import './JobList.css'
export default function AppliedListItem(props) {
  // console.log("props from job item", props);
  const {
    name,
    helper_id,
    client_id,
    description,
    lat,
    lng,
    setCoord,
    price,
    pay_type,
    start_time,
    end_time,
    category_id,
    categories,
    users,
    setProfile,
    onSave,
    setJobView,
    jobView,
    state,
    job_id,
    status,
  } = props;

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
    <div
      className="jobListItem"
      onClick={() => {
        props.setCoord({ lat, lng });
      }}
    >
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
    </div>
  );
}
