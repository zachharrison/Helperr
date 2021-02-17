export const getJobsFiltered = (state, filterArr) => {
  if (filterArr.length === 0) {
    return Object.values(state.jobs);
  }

  const jobsFiltered = [];
  state.jobs.forEach((job) => {
    if (filterArr.includes(job.category_id)) {
      jobsFiltered.push(job);
    }
  });

  return jobsFiltered;
};
