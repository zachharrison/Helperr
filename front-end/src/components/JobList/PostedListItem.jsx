import { useState } from "react";
import Button from "@material-ui/core/Button";
import OfferListItem from "./OfferList/OfferListItem";
import Reviews from "../Reviews/Reviews";
import "../Reviews/Reviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Collapsible from "react-collapsible";

export default function PostedListItem(props) {
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
    postReview,
    updateOffer,
    // setJobView,
    // jobView,
    state,
    job_id,
    status,
    user,
    setProfile,
  } = props;

  const categoryName = categories[category_id - 1].name;
  const userAvatar = users[client_id - 1].avatar;
  const userName = users[client_id - 1].name;

  const allOffers = Object.values(state.offers)
    .filter((offer) => offer.job_id === job_id)
    .filter((offer) => offer.status !== "DECLINED");

  const acceptedOffer = () => {
    const accepted = allOffers.find(
      (jobOffer) => jobOffer.status === "ACCEPTED"
    );
    return accepted ? [accepted] : allOffers;
  };

  const formattedDate = (date) => {
    return Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
    }).format(new Date(date));
  };

  return (
    <div className="accordion-show">
      <div className="jobListItem">
        <div onClick={() => props.setCoord({ lat, lng })}>
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
          <h6 className="date">Expiry: {formattedDate(end_time)}</h6>
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
          {status !== "COMPLETED" && (
            <div className="btns">
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
                state={state}
                status={offers.status}
                postReview={postReview}
                updateOffer={updateOffer}
              />
            </div>
          ))}
        </Collapsible>
      </div>
    </div>
  );
}

{
  /* <div className="jobListItem">
      <Accordion allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div
                onClick={() => {
                  props.setCoord({ lat, lng });
                }}
              >
                <div className="item-row">
                  <h1>{name}</h1>
                  <div className="pay">
                    <p>
                      ${price}
                      {pay_type}
                    </p>
                  </div>
                </div>
                <div className="item-row">
                  <img
                    className="avatar"
                    src={userAvatar}
                    alt="(╯°□°)╯︵ ┻━┻"
                    width="50"
                    height="50"
                  />
                  <div>
                    <h1>{userName}</h1>
                  </div>
                </div>
              </div>
              <div className="accordion-category">
                <p>{categoryName}</p>
              </div>
              <div className="posted-description">
                <p>{description}</p>
              </div>
              <div>
                {status !== "COMPLETED" && (
                  <h6 className="date">
                    {/* {formattedDate(start_time)}
                  -to- */
}
/*Expires {formattedDate(end_time)}
                  </h6>
                )}

                // {/* {status} */
//               </div>
//             </AccordionItemButton>
//           </AccordionItemHeading>
//           <AccordionItemPanel>
//             {acceptedOffer().map((offers) => (
//               <div className="offers">
//                 <OfferListItem
//                   offer_id={offers.id}
//                   job_id={job_id}
//                   helper_id={offers.helper_id}
//                   state={state}
//                   status={offers.status}
//                   postReview={postReview}
//                   updateOffer={updateOffer}
//                 />
//               </div>
//             ))}
//           </AccordionItemPanel>
//         </AccordionItem>
//       </Accordion>
//     </div>
//   );
// }
