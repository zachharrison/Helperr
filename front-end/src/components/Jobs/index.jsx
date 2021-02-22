import Post from "./Post";
import Find from "./Find";
import All from "./All";
import Reviews from "../Reviews/Reviews";
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
    <div className="job-container">
      {state.jobView === "POST" && cookies.user && (
        <div>
          <Post
            state={state}
            setCoord={setCoord}
            coord={coord}
            onSave={saveJob}
            setJobView={setJobView}
          />
        </div>
      )}
      {state.jobView === "FIND" && (
        <div>
          <Find
            state={state}
            jobsFiltered={jobsFiltered}
            setCategoryFilter={setCategoryFilter}
            saveOffer={saveOffer}
            setJobView={setJobView}
          />
        </div>
      )}
      {state.jobView === "ALL" && cookies.user && (
        <div>
          <All
            state={state}
            jobsFiltered={jobsFiltered}
            setCategoryFilter={setCategoryFilter}
            setJobView={setJobView}
            cookies={cookies}
          />
        </div>
      )}
      {state.jobView === "REVIEWS" && cookies.user && (
        <div>
          <Reviews cookies={cookies} />
        </div>
      )}
      {state.jobView === "MESSAGE" && cookies.user && (
        <div>
          <ChatList
            sendMessage={sendMessage}
            setJobView={setJobView}
            getConversations={getConversations}
            setChat={setChat}
            setMessageView={setMessageView}
          />
        </div>
      )}
      {!cookies.user && state.jobView !== "FIND" && (
        <div>
          <Login
            cookies={cookies}
            removeCurrentUser={removeCurrentUser}
            setCurrentUser={setCurrentUser}
          />
        </div>
      )}
      {state.jobView === "CHAT" && cookies.user && (
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
      )}
    </div>
  );
}
