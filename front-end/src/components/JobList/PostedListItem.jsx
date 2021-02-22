import { useState } from "react";
import Button from "@material-ui/core/Button";
import OfferListItem from "./OfferList/OfferListItem";
import Reviews from "../Reviews/Reviews";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function PostedListItem(props) {
  // console.log("props from job item", props);
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
    user,
  } = props;

  const categoryName = categories[category_id - 1].name;
  const userAvatar = users[client_id - 1].avatar;
  const userName = users[client_id - 1].name;

  const jobOffers = Object.values(state.offers);
  const formattedDate = (date) => {
    return Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      // hour: "2-digit",
      // minute: "2-digit",
    }).format(new Date(date));
  };

  return (
    <div className="jobListItem">
      <Accordion allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
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
                  -to- */}
                    Expires {formattedDate(end_time)}
                  </h6>
                )}

                {/* {status} */}
                {status !== "COMPLETED" && (
                  <Reviews user={user} job_id={job_id} />
                )}
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            {jobOffers
              .filter((offer) => offer.job_id === job_id)
              .map((offers) => (
                <div className="offers">
                  <OfferListItem
                    offer_id={offers.id}
                    helper_id={offers.helper_id}
                    state={state}
                    status={offers.status}
                  />
                </div>
              ))}
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
