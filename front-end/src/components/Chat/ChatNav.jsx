import "./Chat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ChatNav({ state, setJobView }) {
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
        </div>
      )}
    </div>
  );
}
