// import { useState } from "react";
import Post from "./Post";
import Find from "./Find";
import All from "./All";
import JobToggle from "../JobToggle/JobToggle";
import "./Jobs.css";
import Chat from "../Chat/Chat";
import ChatList from "../Chat/ChatList";
// import useAppData from "../helpers/hooks/useAppData"
import { DomainPropTypes } from "@material-ui/pickers/constants/prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Login from "../Login/Login";
// import { useCookies, withCookies } from 'react-cookie'

export default function Jobs(props) {
  const {
    state,
    setJobView,
    // messages,
    getConversations,
    getMessages,
    setChat,
    setCoord,
    coord,
    cookies,
    setCurrentUser,
    removeCurrentUser,
    setMessages,
    postJob,
    message,
    sendMessage,
    room,
    setRoom,
    setMessage,
    currentChat,
    setCurrentChat,
    setMessageView,
    addMessage
  } = props;


  function saveJob(newJob) {
    // transition(SAVING);
    postJob(newJob).then(() => setJobView("ALL"));
    // .catch((error) => transition(ERROR_SAVE, true));
  }

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
                onSave={saveJob}
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
              <Find state={state} />
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
              <Chat
                message={message}
                sendMessage={sendMessage}
                room={room}
                setRoom={setRoom}
                setMessage={setMessage}
                currentChat={currentChat}
                setCurrentChat={setCurrentChat}
                setMessageView={setMessageView}
                getMessages={getMessages}
                state={state}
                setMessages={setMessages}
                sendMessage={sendMessage}
                cookies={cookies}
                addMessage={addMessage}
              />
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
}


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