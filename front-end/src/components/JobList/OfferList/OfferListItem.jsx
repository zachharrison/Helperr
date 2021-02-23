export default function OfferListItem(props) {
  // console.log("props from job item", props);
  const { state, offer_id, helper_id, status } = props;

  const helperAvatar = state.users[helper_id].avatar;
  const helperName = state.users[helper_id].name;

  return (
    <div className="offer-list-item">
      <div className="item-row">
        <div className="profile-container-inner">
          <img src={helperAvatar} alt="profile" />
          <p>{helperName}</p>
        </div>
        <div className="pay">{/* <h1 className="rate">{status}</h1> */}</div>
        {status !== "ACCEPTED" && status !== "DECLINED" && (
          <div className="btns">
            <button className="btn-small accept" onClick={() => {}}>
              Accept
            </button>
            <button className="btn-small decline" onClick={() => {}}>
              Decline
            </button>
          </div>
        )}
        {status === "ACCEPTED" && (
          <div>
            <button className="btn-status">ACCEPTED</button>
          </div>
        )}
        {status === "DECLINED" && (
          <div>
            <button className="btn-status">DECLINED</button>
          </div>
        )}
      </div>
    </div>
  );
}
