import "./Profile.css";

const Profile = ({ state }) => {
  // GET USER AND USERS FROM STATE
  const users = Object.values(state.users);
  const user = users.find((u) => state.profile === u.name);

  // LOOP THROUGH JOBS AND FILTER THE ONES THAT THE USER HAS COMPLETED
  const completedJobs = Object.values(state.jobs).filter(
    (job) => job.helper_id === user.id && job.status === "COMPLETED"
  );
  const reviews = Object.values(state.reviews);

  const getUserReviews = (completedJobs, reviews) => {
    const result = [];

    if (completedJobs) {
      completedJobs.forEach((job) => {
        reviews.forEach((review) => {
          if (review.job_id === job.id) {
            result.push(review);
          }
        });
      });
      return result;
    }

    return "N/A";
  };
  const userReviews = getUserReviews(completedJobs, reviews);

  // GET USERS AVERAGE STARS
  const getAvgStars = (userReviews) => {
    if (userReviews.length > 1) {
      return (
        userReviews.reduce((curr, acc) => (curr.stars += acc.stars)) /
        userReviews.length
      );
    } else if (userReviews.length === 1) {
      return userReviews[0].stars;
    } else {
      return "N/A";
    }
  };

  const reviewDisplay =
    userReviews.length > 0 ? (
      reviews.map((review) => (
        <div className="reviews">
          <div className="job-details">
            <p>Job Title: {review.name}</p>
            <p>{review.stars} Stars</p>
          </div>
          <div className="job-feedback">
            <p>
              <span className="review-title">{review.reviewer}: </span>"
              {review.details}"
            </p>
          </div>
        </div>
      ))
    ) : (
      <div className="reviews">
        {state.profile} hasn't completed any jobs yet.
      </div>
    );

  return (
    <div className="profile-card">
      <div className="card profile-card-4">
        <div className="card-body pt-5">
          <div className="card-name-container">
            <div className="profile-info">
              <h5 className="card-title">{user.name}</h5>
              <img src={user.avatar} alt="profile" className="profile" />
            </div>
            <div className="stars-container">
              <h5 className="card-title">Average Stars</h5>
              <div className="stars">{getAvgStars(userReviews)}</div>
            </div>
          </div>
          {reviewDisplay}
        </div>
      </div>
    </div>
  );
};

export default Profile;
