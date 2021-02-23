import "./Chat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ChatNav({ state, setJobView }) {
  console.log("jobiew:", state.jobView);
  return (
    <div>
      {state.jobView !== "CHAT" && (
        <div
          className="bottom-nav"
          onClick={() => {
            setJobView("MESSAGE");
          }}
        >
          <FontAwesomeIcon
            className="fontawesome mail-icon"
            icon={faEnvelope}
          />
        </div>
      )}
      {state.jobView === "CHAT" && (
        <div
          className="bottom-nav-back"
          onClick={() => {
            setJobView("MESSAGE");
          }}
        >
          <div className="x-icon">X</div>
          {/* <FontAwesomeIcon className="x-icon" icon={faTimes} /> */}
        </div>
      )}
    </div>
  );
}
