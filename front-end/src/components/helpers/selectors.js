export function getJobsFiltered(state, coord, categoryFilter, distanceFilter) {
  console.log(distanceFilter);

  const pendingJobs = Object.values(state.jobs).filter(
    (job) => job.status === "POSTED"
  );
  let radiusJobs;
  console.log("state.latstate.lat", state);
  distanceFilter
    ? (radiusJobs = pendingJobs.filter(
        (job) =>
          distBtw2Ptss([job.lat, job.lng], [coord.lat, coord.lng]) <
          distanceFilter
      ))
    : (radiusJobs = pendingJobs);

  console.log("jobsjobsjobsjobs", radiusJobs);

  return categoryFilter.length === 0
    ? radiusJobs
    : radiusJobs.filter((job) =>
        categoryFilter.some((filter) => filter.id === job.category_id)
      );
}

const distBtw2Ptss = (p1, p2) => {
  try {
    const lat1 = p1[0] / (180 / Math.PI);
    const lat2 = p2[0] / (180 / Math.PI);
    const lon1 = p1[1] / (180 / Math.PI);
    const lon2 = p2[1] / (180 / Math.PI);
    const distance =
      6371 *
      Math.acos(
        Math.sin(lat1) * Math.sin(lat2) +
          Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2)
      );
    console.log("distancedistancedistance", distance);
    return distance;
  } catch (error) {
    return null;
  }
};
