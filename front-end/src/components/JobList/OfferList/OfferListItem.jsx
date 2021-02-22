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

  function approval(verdict) {
    const isApproved = {
      offer_id,
      status: verdict,
    };
    updateOffer(isApproved);
  }

  return (
    <div className="offerlist-item">
      <div className="item-row">
        <img src={helperAvatar} alt="(╯°□°)╯︵ ┻━┻" width="50" height="50" />
        <div>
          <h1>{helperName}</h1>
        </div>
        <div className="pay">{/* <h1 className="rate">{status}</h1> */}</div>
        {status !== "ACCEPTED" && status !== "DECLINED" && (
          <div>
            <button className="accept" onClick={() => approval("ACCEPTED")}>
              Accept
            </button>
            <button className="decline" onClick={() => approval("DECLINED")}>
              Decline
            </button>
          </div>
        )}
        {status === "ACCEPTED" && (
          <>
            <div>
              {status !== "Mark Completed" && (
                <Reviews
                  job_id={job_id}
                  helper_id={helper_id}
                  onSave={postReview}
                />
              )}
            </div>
            <div>
              <button className="status-element">ACCEPTED</button>
            </div>
          </>
        )}
        {status === "DECLINED" && (
          <div>
            <button className="status-element">DECLINED</button>
          </div>
        )}
      </div>
    </div>
  );
}
