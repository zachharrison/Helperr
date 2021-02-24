import Reviews from "../../Reviews/Reviews";

export default function OfferListItem({
  state,
  offer_id,
  job_id,
  helper_id,
  status,
  postReview,
  updateOffer,
  setProfile,
  setJobView,
}) {
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

  const handleProfileClick = () => {
    setJobView("PROFILE");
    setProfile(helperName);
  };

  return (
    <div className="offer-list-item">
      <div className="item-row">
        <div className="small-profile" onClick={handleProfileClick}>
          <div className="profile-container">
            <img src={helperAvatar} alt="profile" />
            <p className="username">{helperName}</p>
          </div>
        </div>
        <div className="pay">{/* <h1 className="rate">{status}</h1> */}</div>
        {status === "PENDING" && (
          <div className="btns">
            <button
              className="btn-small accept"
              onClick={() => approval("ACCEPTED", "FILLED")}
            >
              Accept
            </button>
            <button
              className="btn-small decline"
              onClick={() => approval("DECLINED", "POSTED")}
            >
              Decline
            </button>
          </div>
        )}
        {status === "ACCEPTED" && (
          <>
            <div className="btns">
              {status !== "COMPLETED" && (
                <Reviews
                  job_id={job_id}
                  helper_id={helper_id}
                  offer_id={offer_id}
                  onSave={postReview}
                />
              )}
              <button className="btn-status">ACCEPTED</button>
            </div>
          </>
        )}
        {status === "REVIEWED" && (
          <div>
            <button className="btn-status">COMPLETED</button>
          </div>
        )}
      </div>
    </div>
  );
}
