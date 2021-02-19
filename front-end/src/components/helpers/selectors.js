export const getJobsFiltered = (state, filterArr) =>
  filterArr.length === 0
    ? Object.values(state.jobs)
    : Object.values(state.jobs).filter((job) =>
        filterArr.some((filter) => filter.id === job.category_id)
      );
