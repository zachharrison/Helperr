export default function OfferListItem(props) {
  // console.log("props from job item", props);
  const { state, offer_id, helper_id, status } = props;

  // if (!categories) return null;

  const helperAvatar = state.users[helper_id].avatar;
  const helperName = state.users[helper_id].name;

  return (
    <div>
      <div className="item-row">
        <img src={helperAvatar} alt="(╯°□°)╯︵ ┻━┻" width="50" height="50" />
        <div className="pay">
          <h1 className="rate">{helperName}</h1>
        </div>
        <div className="pay">
          <h1 className="rate">{status}</h1>
        </div>
        <button onClick={() => {}}>Accept</button>
        <button onClick={() => {}}>Decline</button>
      </div>
    </div>
  );
}
