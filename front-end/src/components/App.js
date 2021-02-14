import Navbar from "./navbar/Navbar";
import Map from "./Map";
import { Input } from "@material-ui/core";
import Jobs from "./Jobs";
import { useState } from "react";

import fixtures from "./helpers/__mocks__/axios";
import useAppData from "./helpers/hooks/useAppData";

// fixtures has: users, jobs, categories, offers, messages, reviews

export default function App() {
  // const { users, jobs, categories, offers, messages, reviews } = fixtures;
  const {state, setJobView } = useAppData()

  // const [state, setState] = useState({
  //   users,
  //   jobs,
  //   categories,
  //   offers,
  //   messages,
  //   reviews,
  //   jobView: "ALL"
  // });

  return (
    <div className="App">
      <Navbar />
      <div className="containers">
        <div className="map-container">
          <Map />
        </div>

        <div className="jobs-container">
          <Jobs state={state} setJobView={setJobView}/>
        </div>
      </div>
    </div>
  );
}
