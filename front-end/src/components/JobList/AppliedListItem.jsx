import { useState } from "react";
import Button from "@material-ui/core/Button";
import "./JobList.css";
import "../Reviews/Reviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Collapsible from "react-collapsible";

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
    }).format(new Date(date));
  };

  const handleProfileClick = () => {
    setJobView("PROFILE");
    setProfile(userName);
  };

  return (
    <div className="accordion-show">
      <div className="jobListItem" onClick={() => props.setCoord({ lat, lng })}>
        <div className="item-row">
          <h1>{name}</h1>
          <div className="pay">
            <h1>
              {categoryName} for ${price}
              {pay_type}
            </h1>
          </div>
        </div>
        <div className="profile-container">
          <img src={userAvatar} alt="profile" />
          <p className="username">{userName}</p>
          <button onClick={handleProfileClick} className="btn">
            View Profile
          </button>
        </div>
        <h6 className="date">Expiry: {formattedDate(end_time)}</h6>
        <Collapsible
          name={name}
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
          <button className="btn-status">{status}</button>
        </Collapsible>
      </div>
    </div>
  );
}
