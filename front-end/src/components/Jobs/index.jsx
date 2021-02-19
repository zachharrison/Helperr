import Post from "./Post";
import Find from "./Find";
import All from "./All";
import JobToggle from "../JobToggle/JobToggle";
import "./Jobs.css";
import Chat from "../Chat/Chat";
import ChatList from "../Chat/ChatList";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Login from "../Login/Login";

export default function Jobs({
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
  jobsFiltered,
  setCategoryFilter,
  cookies,
  setCurrentUser,
  removeCurrentUser,
  setMessages,
  postJob,
}) {
  function saveJob(newJob) {
    postJob(newJob)
      .then(() => setJobView("ALL"))
      .catch((error) => {
        console.log("Error: ", error);
      });
  }
  console.log("jobsFiltered HERE", jobsFiltered);
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
              <Find
                state={state}
                jobsFiltered={jobsFiltered}
                setCategoryFilter={setCategoryFilter}
              />
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
              <All
                state={state}
                jobsFiltered={jobsFiltered}
                setCategoryFilter={setCategoryFilter}
              />
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
                getMessages={getMessages}
                state={state}
                setMessages={setMessages}
                sendMessage={sendMessage}
                cookies={cookies}
              />
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
}
