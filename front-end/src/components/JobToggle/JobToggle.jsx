import "./ViewToggle.css";

export default function JobToggle({ setJobView }) {
  return (
    <div className="toggle-btn-container">
      <button
        className="multi-button skin skin1"
        onClick={() => {
          setJobView("ALL");
        }}
      >
        Jobs
      </button>
      <button
        className="multi-button skin skin2"
        onClick={() => {
          setJobView("POST");
        }}
      >
        Post
      </button>
      <button
        className="multi-button skin skin3"
        onClick={() => {
          setJobView("FIND");
        }}
      >
        Find
      </button>
    </div>
  );
}
