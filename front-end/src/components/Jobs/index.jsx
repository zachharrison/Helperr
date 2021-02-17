// import { useState } from "react";
import Post from "./Post";
import Find from "./Find";
import All from "./All";
import JobToggle from "../JobToggle/JobToggle";
import "./Jobs.css";
import Chat from "../Chat/Chat";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ChatList from "../Chat/ChatList";

export default function Jobs(props) {
  function dropPin(job) {
    const newJob = {
      job,
    };
    props
      .saveJob(props.id)
      .then(() => props.setJobView("ALL"))
      .catch((error) => console.log(error));
  }

  return (
    <>
      <JobToggle state={props.state} setJobView={props.setJobView} />
      <TransitionGroup className="job-container">
        {props.state.jobView === "POST" && (
          <CSSTransition
            key={1}
            timeout={500}
            classNames="slide"
            in={props.state.jobView === "POST"}
          >
            <div>
              <Post
                state={props.state}
                setCoord={props.setCoord}
                coord={props.coord}
                onSave={dropPin}
              />
            </div>
          </CSSTransition>
        )}
        {props.state.jobView === "FIND" && (
          <CSSTransition
            key={2}
            timeout={500}
            classNames="slide"
            in={props.state.jobView === "FIND"}
          >
            <div>
              <Find state={props.state} />
            </div>
          </CSSTransition>
        )}
        {props.state.jobView === "ALL" && (
          <CSSTransition
            key={3}
            timeout={500}
            classNames="slide"
            in={props.state.jobView === "ALL"}
          >
            <div>
              <All />
            </div>
          </CSSTransition>
        )}
        {props.state.jobView === "MESSAGE" && (
          <CSSTransition
            key={4}
            timeout={500}
            classNames="slide"
            in={props.state.jobView === "MESSAGE"}
          >
            <div>
              <Chat messages={props.messages} sendMessage={props.sendMessage} />
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
}
