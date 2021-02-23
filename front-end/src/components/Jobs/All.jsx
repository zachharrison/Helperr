import "./Jobs.css";
import PostedListItem from "../JobList/PostedListItem";
import AppliedListItem from "../JobList/AppliedListItem";

export default function All({
  state,
  setCoord,
  postReview,
  updateOffer,
  setProfile,
  setJobView,
}) {
  const user = state.currentUser;
  const jobs = Object.values(state.jobs);

  const posted = jobs.filter(
    (job) =>
      job.client_id === user &&
      (job.status === "POSTED" || job.status === "FILLED")
  );

  const applied = Object.values(state.offers)
    .filter((offer) => offer.helper_id === user)
    .map((myApps) =>
      jobs.find((job) => job.status !== "COMPLETED" && job.id === myApps.job_id)
    )
    .filter((app) => app);

  const completed = jobs.filter(
    (job) => job.client_id === user && job.status === "COMPLETED"
  );

  return (
    <>
      <h3>Posted Jobs</h3>
      {posted.length > 0 &&
        posted.map((myPosts) => (
          <PostedListItem
            {...myPosts}
            job_id={myPosts.id}
            state={state}
            setCoord={setCoord}
            postReview={postReview}
            updateOffer={updateOffer}
            setProfile={setProfile}
          />
        ))}
      {posted.length < 1 && (
        <p className="text-center">You have no posted jobs.</p>
      )}
      <h3>Applied Jobs</h3>
      {applied.length > 0 &&
        applied.map((myApps) => (
          <AppliedListItem
            {...myApps}
            key={myApps.id}
            state={state}
            setCoord={setCoord}
            setJobView={setJobView}
            setProfile={setProfile}
          />
        ))}
      {applied.length < 1 && (
        <p className="text-center">You have no applied jobs.</p>
      )}
      <h3>Completed Jobs</h3>
      {completed.length > 0 &&
        completed.map((myPosts) => (
          <PostedListItem
            {...myPosts}
            job_id={myPosts.id}
            state={state}
            setCoord={setCoord}
            postReview={postReview}
            updateOffer={updateOffer}
            setProfile={setProfile}
          />
        ))}
      {completed.length < 1 && (
        <p className="text-center">You have no completed jobs.</p>
      )}
    </>
  );
}
