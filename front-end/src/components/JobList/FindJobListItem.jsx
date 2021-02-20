export default function FindJobListItem(props) {
  const {
    name,
    description,
    price,
    pay_type,
    start_time,
    end_time,
    category_id,
  } = props;

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
            {pay_type}
          </p>
        </div>
      </div>
      <div className="item-row">
        <p className="date">{category_id}</p>
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
