import Reviews from "../../Reviews/Reviews";

export default function OfferListItem(props) {
  const {
    state,
    offer_id,
    job_id,
    helper_id,
    status,
    postReview,
    updateOffer,
  } = props;
  const helperAvatar = state.users[helper_id].avatar;
  const helperName = state.users[helper_id].name;

  function approval(offer_status, job_status) {
    const isApproved = {
      offer_id,
      offer_status,
      job_id,
      job_status,
      helper_id: offer_status === "ACCEPTED" ? helper_id : null,
    };
    updateOffer(isApproved);
  }

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
            <button className="btn-small accept" onClick={() => approval("ACCEPTED", "FILLED")}>
              Accept
            </button>
            <button className="btn-small decline" onClick={() => approval("DECLINED", "POSTED")}>
              Decline
            </button>
          </div>
        )}
        {status === "ACCEPTED" && (
          <>
            <div className="btn-status">
              {status !== "COMPLETED" && (
                <Reviews
                  job_id={job_id}
                  helper_id={helper_id}
                  offer_id={offer_id}
                  onSave={postReview}
                />
              )}
            </div>
            <div>
              <button className="btn-status">ACCEPTED</button>
            </div>
          </>
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
