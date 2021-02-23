import "./Jobs.css";
import { makeStyles } from "@material-ui/core/styles";
import PostedListItem from "../JobList/PostedListItem";
import AppliedListItem from "../JobList/AppliedListItem";

export default function All(props) {
  const user = props.state.currentUser;
  const users = Object.values(props.state.users);
  const jobs = Object.values(props.state.jobs);
  const categories = Object.values(props.state.categories);

  const posted = jobs.filter(
    (job) =>
      job.client_id === user &&
      (job.status === "POSTED" || job.status === "FILLED")
  );

  const applied = Object.values(props.state.offers)
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
            categories={categories}
            user={user}
            users={users}
            state={props.state}
            setCoord={props.setCoord}
            updateOffer={props.updateOffer}
            postReview={props.postReview}
            setProfile={props.setProfile}
            // cookies={props.cookies}
            // setJobView={props.setJobView}
          />
        ))}
      {posted.length < 1 && <div>You have no posted jobs.</div>}
      <h3>Applied Jobs</h3>
      {applied.length > 0 &&
        applied.map((myApps) => (
          <AppliedListItem
            {...myApps}
            key={myApps.id}
            categories={categories}
            users={users}
            state={props.state}
            setJobView={props.setJobView}
            setCoord={props.setCoord}
            setProfile={props.setProfile}
            // cookies={props.cookies}
          />
        ))}
      {applied.length < 1 && <div>You have no applied jobs.</div>}
      <h3>Completed Jobs</h3>
      {completed.length > 0 &&
        completed.map((myPosts) => (
          <PostedListItem
            {...myPosts}
            job_id={myPosts.id}
            categories={categories}
            user={user}
            users={users}
            state={props.state}
            setCoord={props.setCoord}
            updateOffer={props.updateOffer}
            setProfile={props.setProfile}
          />
        ))}
      {completed.length < 1 && <div>You have no completed jobs.</div>}
    </>
  );
}
