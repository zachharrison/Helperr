import Reviews from "../../Reviews/Reviews";

export default function OfferListItem(props) {
  const { state, offer_id, job_id, helper_id, status, postReview } = props;
  const helperAvatar = state.users[helper_id].avatar;
  const helperName = state.users[helper_id].name;

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
            <button className="accept" onClick={() => {}}>
              Accept
            </button>
            <button className="decline" onClick={() => {}}>
              Decline
            </button>
          </div>
        )}
        {status === "ACCEPTED" && (
          <>
            <div>
              {status !== "COMPLETED" && (
                <Reviews
                  job_id={job_id}
                  helper_id={helper_id}
                  onSave={postReview}
                />
              )}
            </div>
            <div>
              <button className="status-element">ACCEPT</button>
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
