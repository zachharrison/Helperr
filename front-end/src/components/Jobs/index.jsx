import Post from "./Post";
import Find from "./Find";
import All from "./All";
import Error from "./Error";
import Status from "./Status";
import useVisualMode from "../helpers/hooks/useVisualMode";
import JobToggle from "../JobToggle/JobToggle";
import { useState } from "react";
import "./Jobs.css";
import Chat from "../Chat/Chat";

const POST = "POST";
const FIND = "FIND";
const ALL = "ALL";
const SAVING = "SAVING";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Jobs(props) {
  // const [jobView, setJobView] = useState(ALL)
  // const { mode, transition, back } = useVisualMode(ALL);

  // function save(job) {
  //   const newJob = {
  //     // id: 1,
  //     // client_id: 1,
  //     // helper_id: 2,
  //     // category_id: 3,
  //     name: "Babysit a lil' brat",
  //     description: "Take care of this POS for me thanks",
  //     // lat: 49.28129,
  //     // lng: 123.115121,
  //     price: 1000,
  //     per_hr: "FALSE",
  //     // start_time: "2021-02-26 18:00:00",
  //     // end_time: "2021-02-27 00:00:00",
  //     // status: "POSTED",
  //   };
  //   // transition(SAVING);
  //   props
  //     .savePin(props.id)
  //     .then(() => setJobView(ALL))
  //     // .catch((error) => transition(ERROR_SAVE, true));
  // }

  return (
    <>
      <JobToggle state={props.state} setJobView={props.setJobView} />
      {props.state.jobView === "POST" && <Post state={props.state} />}
      {props.state.jobView === "FIND" && <Find />}
      {props.state.jobView === "ALL" && <All />}
      {props.state.jobView === "MESSAGE" && (
        <Chat messages={props.messages} sendMessage={props.sendMessage} />
      )}
    </>
  );
}

/* 
users,
jobs,
categories,
offers,
messages,
reviews,
*/
