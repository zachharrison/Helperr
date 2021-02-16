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
    // lat: 49.26800377076573,
    // lng: -123.10571490809717,
  });

  const setJobView = (jobView) => setState({ ...state, jobView });
  // const setLat = (lat) => setState({ ...state, lat });
  // const setLng = (lng) => setState({ ...state, lng });
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
