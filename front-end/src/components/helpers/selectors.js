export function getJobsFiltered(state, filterArr) {
  console.log("FILTER BB", state);
  console.log("FILTER BB arr", filterArr);
  const pendingJobs = Object.values(state.jobs).filter(
    (job) => job.status === "POSTED"
  );
  return filterArr.length === 0
    ? pendingJobs
    : pendingJobs.filter((job) =>
        filterArr.some((filter) => filter.id === job.category_id)
      );
}
