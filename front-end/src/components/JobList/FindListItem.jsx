import { useState } from "react";
import Button from "@material-ui/core/Button";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function FindListItem(props) {
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
    onSave,
    setJobView,
    jobView,
    state,
    job_id,
    status,
    isSelected,
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

  return (
    <div className="jobListItem">
      <AccordionItem dangerouslySetExpanded={isSelected}>
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
                  <h1>
                    {categoryName} for ${price}
                    {pay_type}
                  </h1>
                </div>
              </div>
              <div className="user-info">
                <img
                  src={userAvatar}
                  alt="(╯°□°)╯︵ ┻━┻"
                  width="50"
                  height="50"
                />
                <h4 className="rate">{userName}</h4>
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
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="item-row">
            <p className="date">{description}</p>
          </div>
          <Button
            onClick={application}
            variant="contained"
            color="primary"
            style={{ margin: 8 }}
          >
            Apply
          </Button>
        </AccordionItemPanel>
      </AccordionItem>
    </div>
  );
}
