import { useState, useEffect } from "react";
import fixtures from "../__mocks__/axios";
import axios from "axios";

export default function useAppData() {
  const { users, jobs, categories, offers, messages, reviews } = fixtures;

  const [state, setState] = useState({
    users,
    jobs,
    categories,
    offers,
    messages,
    reviews,
    jobView: "POST",
    // lat: 49.26800377076573,
    // lng: -123.10571490809717,
  });

  const setJobView = (jobView) => setState({ ...state, jobView });

  useEffect(() => {
    Promise.all([
      axios.get("/api/users"),
      axios.get("/api/jobs"),
      axios.get("/api/categories"),
      axios.get("/api/offers"),
      axios.get("/api/reviews"),
      // axios.get("/api/messages"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        users: all[0].data,
        jobs: all[1].data,
        categories: all[2].data,
        offers: all[3].data,
        reviews: all[4].data,
        // messages: all[4].data,
      }));
    });
  }, []);

  function postJob(job) {
    return axios.put(`/api/jobs/`, job).then(setState({ ...state, job }));
  }

  return { state, setJobView };
}
