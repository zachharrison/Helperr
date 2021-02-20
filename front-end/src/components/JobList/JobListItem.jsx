export default function jobListItem(props) {
  const {
    name,
    client_id,
    description,
    price,
    pay_type,
    start_time,
    end_time,
    category_id,
    categories,
    users,
  } = props;

  if (!categories) return null;

  const categoryName = categories[category_id - 1].name;
  const userAvatar = users[client_id - 1].avatar;
  const userName = users[client_id - 1].name;
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
        <img src={userAvatar} alt="(╯°□°)╯︵ ┻━┻" width="50" height="50" />
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
          {startDate}
          -to-
          {endDate}
        </h6>
      </div>
    </div>
  );
}
