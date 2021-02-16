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
    postcode: "",
  });

  const setJobView = (jobView) => setState({ ...state, jobView });
  const setPostCode = (postCode) => setState({ ...state, postCode });

  useEffect(() => {
    Promise.all([
      axios.get("/api/users"),
      axios.get("/api/jobs"),
      axios.get("/api/categories"),
      axios.get("/api/offers"),
      axios.get("/api/messages"),
      axios.get("/api/reviews"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        users: all[0].data,
        jobs: all[1].data,
        categories: all[2].data,
        offers: all[3].data,
        messages: all[4].data,
        reviews: all[5].data,
      }));
    });
  }, []);

  return { state, setJobView, setPostCode };
}
