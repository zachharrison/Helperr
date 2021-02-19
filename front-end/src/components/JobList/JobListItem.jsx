export default function JobListItem(props) {
  const {
    name,
    description,
    category_id,
    price,
    per_hr,
    start_time,
    end_time,
    category_name,
  } = props;

  console.log("start time===>", start_time);
  console.log("end time ===>", end_time);
  const startDate = Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(start_time));
  const endDate = Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(end_time));

  return (
    <div className="jobListItem">
      <div className="item-row">
        <h1>{name}</h1>
        <div className="pay">
          <p className="rate">
            ${price}
            {per_hr}
          </p>
        </div>
      </div>
      <div className="item-row">
        <p className="date">{category_name}</p>
      </div>
      <div className="item-row">
        <p className="date">{description}</p>
      </div>
      <div className="item-row">
        <h6 className="date">
          {startDate}
          -to-
          {endDate}
        </h6>
      </div>
    </div>
  );
}
