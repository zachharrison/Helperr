import { useState } from "react";
import fixtures from "../__mocks__/axios";


export default function useAppData() {
  const { users, jobs, categories, offers, messages, reviews } = fixtures;
  
  const [state, setState] = useState({
    users,
    jobs,
    categories,
    offers,
    messages,
    reviews,
    jobView: "ALL",
  });

  const setJobView = (jobView) => setState({ ...state, jobView });

  return { state, setJobView };
};
