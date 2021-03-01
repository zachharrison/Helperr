import "./JobList.css";
import "../Reviews/Reviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Collapsible from "react-collapsible";

export default function AppliedListItem({
  name,
  client_id,
  description,
  lat,
  lng,
  price,
  pay_type,
  end_date,
  category_id,
  setProfile,
  setJobView,
  setCoord,
  state,
  status,
}) {
  const categories = Object.values(state.categories);
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
      <div className="jobListItem" onClick={() => setCoord({ lat, lng })}>
        <div className="item-row">
          <h1>{name}</h1>
          <div className="pay">
            <h1 className="offer-amount">
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
        <h6 className="date">Expiry: {formattedDate(end_date)}</h6>
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
