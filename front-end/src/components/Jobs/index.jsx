import Post from "./Post";
import Find from "./Find";
import All from "./All";
import Reviews from "../Reviews/Reviews";
import Profile from "../Profile/Profile"
import JobToggle from "../JobToggle/JobToggle";
import "./Jobs.css";
import Chat from "../Chat/Chat";
import ChatList from "../Chat/ChatList";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Login from "../Login/Login";
// import { useCookies, withCookies } from 'react-cookie'

export default function Jobs(props) {
  const {
    state,
    setJobView,
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
    postOffer,
    message,
    sendMessage,
    room,
    setRoom,
    setMessage,
    currentChat,
    setCurrentChat,
    setMessageView,
    addMessage,
    setCategoryFilter,
    jobsFiltered,
    saveReview,
    setProfile,
  } = props;

  function saveJob(newJob) {
    postJob(newJob)
      .then(() => setJobView("ALL"))
      .catch((error) => {
        console.log("Error: ", error);
      });
  }
  function saveOffer(newOffer) {
    postOffer(newOffer)
      .then(() => setJobView("ALL"))
      .catch((error) => {
        console.log("Error: ", error);
      });
  }

  return (
    <>
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
                setJobView={setJobView}
              />
            </div>
          </CSSTransition>
        )}
        {state.jobView === "PROFILE" && cookies.user && (
          <CSSTransition
            key={1}
            timeout={500}
            classNames="slide"
            in={state.jobView === "PROFILE" && cookies.user}
          >
            <div>
              <Profile 
                state={state}
                cookies={cookies}
                />
            </div>
          </CSSTransition>
        )}
          {state.jobView === "FIND" && cookies.user && (
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
                saveOffer={saveOffer}
                setJobView={setJobView}
                setProfile={setProfile}
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
                setJobView={setJobView}
                cookies={cookies}
                setProfile={setProfile}
              />
            </div>
          </CSSTransition>
        )}
        {state.jobView === "REVIEWS" && cookies.user && (
          <CSSTransition
            key={1}
            timeout={500}
            classNames="slide"
            in={state.jobView === "REVIEWS" && cookies.user}
          >
            <div>
              <Reviews cookies={cookies} />
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
              <Find
                state={state}
                jobsFiltered={jobsFiltered}
                setCategoryFilter={setCategoryFilter}
                setJobView={setJobView}
                setProfile={setProfile}
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
