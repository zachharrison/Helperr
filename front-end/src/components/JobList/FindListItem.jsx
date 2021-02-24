import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Collapsible from "react-collapsible";
import "./JobList.css";
import "../Jobs/Accordion/Accordion.css";

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
  start_date,
  end_date,
  category_id,
  onSave,
  setJobView,
  state,
  job_id,
  setProfile,
}) {
  const [error, setError] = useState("");

  function application() {
    const newOffer = {
      helper_id: state.currentUser,
      job_id,
      price,
      pay_type,
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
              {/* <button onClick={handleProfileClick} className="btn">
            View Profile
          </button> */}
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
          <button onClick={application} className="btn">
            Apply
          </button>
        </Collapsible>
      </div>
    </div>
  );
}
