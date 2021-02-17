// import { useState } from "react";
import Post from "./Post";
import Find from "./Find";
import All from "./All";
import JobToggle from "../JobToggle/JobToggle";
import "./Jobs.css";
import Chat from "../Chat/Chat";
import ChatList from '../Chat/ChatList'
import { DomainPropTypes } from "@material-ui/pickers/constants/prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Login from '../Login/Login'
import { useCookies, withCookies } from 'react-cookie'

export default function Jobs(props) {
    const [cookies] = useCookies()
  function dropPin(job) {
    const newJob = {
      job,
    };
    props
      .saveJob(props.id)
      .then(() => props.setJobView("ALL"))
      .catch((error) => console.log(error));
  }

// import { Transition } from "react-transition-group";


// const POST = "POST";
// const FIND = "FIND";
// const ALL = "ALL";
// const SAVING = "SAVING";
// const ERROR_SAVE = "ERROR_SAVE";
// const ERROR_DELETE = "ERROR_DELETE";




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
      <TransitionGroup className="job-container">
        {props.state.jobView === "POST" && props.cookies.user && (
          <CSSTransition
            key={1}
            timeout={500}
            classNames="slide"
            in={props.state.jobView === "POST" && props.cookies.user}
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
        {props.state.jobView === "MESSAGE" && cookies.user && (
          <CSSTransition
            key={1}
            timeout={500}
            classNames="slide"
            in={props.state.jobView === "MESSAGE" && cookies.user}
          >
            <div>
            <ChatList 
            sendMessage={props.sendMessage} 
            setJobView={props.setJobView} 
            getConversations={props.getConversations} 
            setChat={props.setChat}/>
            </div>
          </CSSTransition>
        )}
        {!props.cookies.user && props.state.jobView !== "FIND" && (
          <CSSTransition
            key={1}
            timeout={500}
            classNames="slide"
            in={!props.cookies.user && props.state.jobView !== "FIND"}
          >
            <div>
            <Login cookies={cookies} removeCookie={props.removeCookie}/>
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
        {props.state.jobView === "ALL" && cookies.user && (
          <CSSTransition
            key={3}
            timeout={500}
            classNames="slide"
            in={props.state.jobView === "ALL" && cookies.user}
          >
            <div>
              <All />
            </div>
          </CSSTransition>
        )}
        {props.state.jobView === "CHAT" && cookies.user && (
          <CSSTransition
            key={4}
            timeout={500}
            classNames="slide"
            in={props.state.jobView === "CHAT" && cookies.user}
          >
            <div>
              <Chat getMessages={props.getMessages} state={props.state} setMessages={props.setMessages} sendMessage={props.sendMessage} cookies={cookies} />
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
}

