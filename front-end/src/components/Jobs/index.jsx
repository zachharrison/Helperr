import Post from "./Post";
import Find from "./Find";
import All from "./All";
import Profile from "../Profile/Profile";
import Chat from "../Chat/Chat";
import ChatList from "../Chat/ChatList";
import Login from "../Login/Login";
import "./Jobs.css";

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
    postReview,
    updateOffer,
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
    selected,
    setSelected,
    setProfile,
    getUserNameFromId,
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
      {state.jobView === "PROFILE" && cookies.user && (
        <div>
          <Profile state={state} cookies={cookies} />
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
            setCoord={setCoord}
            selected={selected}
            setSelected={setSelected}
            setProfile={setProfile}
          />
        </div>
      )}
      {state.jobView === "ALL" && cookies.user && (
        <div>
          <All
            state={state}
            setCategoryFilter={setCategoryFilter}
            setJobView={setJobView}
            cookies={cookies}
            setCoord={setCoord}
            setProfile={setProfile}
            postReview={postReview}
            updateOffer={updateOffer}
          />
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
            getUserNameFromId={getUserNameFromId}
            currentUser={state.currentUser}
          />
        </div>
      )}
      {!cookies.user && state.jobView !== "FIND" && (
        <div className="accordion-show">
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
