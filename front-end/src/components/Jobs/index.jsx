// import { useState } from "react";
import Post from "./Post";
import Find from "./Find";
import All from "./All";
import JobToggle from "../JobToggle/JobToggle";
import "./Jobs.css";
import Chat from "../Chat/Chat";
import ChatList from '../Chat/ChatList'
// import useAppData from "../helpers/hooks/useAppData"
import { DomainPropTypes } from "@material-ui/pickers/constants/prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Login from '../Login/Login'
// import { useCookies, withCookies } from 'react-cookie'

export default function Jobs(props) {
  const {
    state,
    setJobView,
    messages,
    sendMessage,
    setMessageView,
    getConversations,
    getMessages,
    setChat,
    setCoord,
    coord,
    cookies,
    setCurrentUser,
    removeCurrentUser,
    setMessages,
    saveJob
  } = props;


  // const [cookies] = useCookies()
//   function dropPin(job) {
//   const newJob = { job };
//   saveJob(props.id)
//   .then(() => props.setJobView("ALL"))
//   .catch((error) => console.log(error));
// }
// const POST = "POST";
// const FIND = "FIND";
// const ALL = "ALL";
// const SAVING = "SAVING";
// const ERROR_SAVE = "ERROR_SAVE";
// const ERROR_DELETE = "ERROR_DELETE";



  // console.log(props)
  // const [cookies] = useCookies()

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
  // onSave={dropPin}


  return (
    <>
      <JobToggle state={state} setJobView={setJobView} />
      <TransitionGroup className="job-container">
        {state.jobView === "POST" && cookies.user && (
          <CSSTransition
            key={1}
            timeout={500}
            classNames="slide"
            in={state.jobView === "POST" && cookies.user}
          >
            <div>
              <Post
                state={state}
                setCoord={setCoord}
                coord={coord}
                state={state}
                setCoord={setCoord}
                coord={coord}
              />
            </div>
          </CSSTransition>
        )}
        {state.jobView === "MESSAGE" && cookies.user && (
          <CSSTransition
            key={1}
            timeout={500}
            classNames="slide"
            in={state.jobView === "MESSAGE" && cookies.user}
          >
            <div>
            <ChatList 
              sendMessage={sendMessage} 
              setJobView={setJobView} 
              getConversations={getConversations} 
              setChat={setChat}
              setMessageView={setMessageView}
            />
            </div>
          </CSSTransition>
        )}
        {!cookies.user && state.jobView !== "FIND" && (
          <CSSTransition
            key={1}
            timeout={500}
            classNames="slide"
            in={!cookies.user && state.jobView !== "FIND"}
          >
            <div>
            <Login 
              cookies={cookies} 
              removeCurrentUser={removeCurrentUser} 
              setCurrentUser={setCurrentUser}
            />
            </div>
          </CSSTransition>
        )}
        {state.jobView === "FIND" && (
          <CSSTransition
            key={2}
            timeout={500}
            classNames="slide"
            in={state.jobView === "FIND"}
          >
            <div>
              <Find state={state}/>
            </div>
          </CSSTransition>
        )}
        {state.jobView === "ALL" && cookies.user && (
          <CSSTransition
            key={3}
            timeout={500}
            classNames="slide"
            in={state.jobView === "ALL" && cookies.user}
          >
            <div>
              <All />
            </div>
          </CSSTransition>
        )}
        {state.jobView === "CHAT" && cookies.user && (
          <CSSTransition
            key={4}
            timeout={500}
            classNames="slide"
            in={state.jobView === "CHAT" && cookies.user}
          >
            <div>
              <Chat getMessages={getMessages} state={state} setMessages={setMessages} sendMessage={sendMessage} cookies={cookies} />
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
}

