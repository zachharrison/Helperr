import OfferListItem from "./OfferList/OfferListItem";
import Reviews from "../Reviews/Reviews";
import "../Reviews/Reviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Collapsible from "react-collapsible";

export default function PostedListItem({
  name,
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
  postReview,
  updateOffer,
  job_id,
  status,
  state,
}) {
  const user = state.currentUser;
  const users = Object.values(state.users);
  const categories = Object.values(state.categories);

  const categoryName = categories[category_id - 1].name;
  const userAvatar = users[client_id - 1].avatar;
  const userName = users[client_id - 1].name;

  const allOffers = Object.values(state.offers)
    .filter((offer) => offer.job_id === job_id)
    .filter((offer) => offer.status !== "DECLINED");

  const acceptedOffer = () => {
    const accepted = allOffers.find(
      (jobOffer) =>
        jobOffer.status === "ACCEPTED" || jobOffer.status === "REVIEWED"
    );
    return accepted ? [accepted] : allOffers;
  };

  const formattedDate = (date) => {
    return Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      // hour: "2-digit",
      // minute: "2-digit",
    }).format(new Date(date));
  };

  return (
    <div className="accordion-show">
      <div className="jobListItem">
        <div onClick={() => setCoord({ lat, lng })}>
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
          </div>
        </div>
        {status !== "COMPLETED" && (
          <h6 className="date">
            {/* {formattedDate(start_time)}-to- */}
            Expiry: {formattedDate(end_time)}
          </h6>
        )}

        <Collapsible
          name={name}
          trigger={
            <FontAwesomeIcon
              icon={faChevronDown}
              className="job-list-chevron"
            />
          }
        >
          {status === "FILLED" && (
            <div className="btns">
              <Reviews user={user} job_id={job_id} />
              <Reviews user={user} job_id={job_id} />
            </div>
          )}
          <div className="item-row">
            <p className="job-description">{description}</p>
          </div>
          {acceptedOffer().map((offers) => (
            <div className="offers">
              <OfferListItem
                offer_id={offers.id}
                job_id={job_id}
                helper_id={offers.helper_id}
                status={offers.status}
                postReview={postReview}
                updateOffer={updateOffer}
                state={state}
              />
            </div>
          ))}
        </Collapsible>
      </div>
    </div>
  );
}
