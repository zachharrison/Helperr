import React from "react";
import "./Profile.css";

const Profile = ({ state }) => {
  const user = Object.values(state.users).find(
    (user) => state.profile === user.name
  );

  const reviews = Object.values(state.reviews).filter(
    (review) => review.helper_id === user.id
  );

  const avgStars =
    reviews.length >= 1
      ? reviews.reduce((curr, acc) => curr + acc.stars, 0) / reviews.length
      : "N/A";

  const starIcons = (avgStars) => {
    const full = (
      <img
        className="stars"
        src="/star-solid.svg"
        alt="fullstar"
        width="20px"
        height="20px"
      />
    );
    const half = (
      <img
        className="stars"
        src="/star-half-alt-solid.svg"
        alt="halfstar"
        width="20px"
        height="20px"
      />
    );
    const empty = (
      <img
        className="stars"
        src="/star-regular.svg"
        alt="nostar"
        width="20px"
        height="20px"
      />
    );
    const fullStars = avgStars - (avgStars % 1);

    const starArr = [];
    let stars = 0;
    while (stars < fullStars) {
      starArr.push(full);
      stars++;
    }
    avgStars % 1 !== 0 && starArr.push(half);

    while (starArr.length < 5) {
      starArr.push(empty);
    }

    return starArr;
  };

  const categoriesReviewed = reviews
    .map(
      (review) => state.categories[state.jobs[review.job_id].category_id].name
    )
    .reduce((m, c) => {
      m[c] = (m[c] || 0) + 1;
      return m;
    }, {});

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
              {Object.keys(categoriesReviewed).map((cat, i) => (
                <span className="review-title">
                  {cat}: {categoriesReviewed[cat]}
                </span>
              ))}
            </div>
            <div className="stars-container">
              {/* <h5 className="card-title">Average Stars</h5> */}
              <div className="stars">{starIcons(avgStars)}</div>
            </div>
          </div>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div className="reviews">
                <div className="job-details">
                  <div className="review-box">
                    <h4>
                      {
                        state.categories[state.jobs[review.job_id].category_id]
                          .name
                      }
                    </h4>
                    <h4>{review.name} </h4>
                  </div>
                  <h4>{starIcons(review.stars)}</h4>
                </div>
                <div className="job-feedback">
                  <p>
                    <span className="review-title">
                      {state.users[state.jobs[review.job_id].client_id].name}:{" "}
                    </span>{" "}
                    "{review.details}"
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="reviews">
              {state.profile} hasn't completed any jobs yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
