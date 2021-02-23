import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import "./ViewToggle.css"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

{/* <div
className={`banner large ${active ? "active" : ""} ${
  disabled ? "disabled" : ""
}`}
>
{children}
</div> */}

export default function JobToggle(props) {
  const jobView = props.state.jobView
  // console.log("thejobview", props.state.jobView)
  const classes = useStyles();

  return (
  
      <div className="toggle-btn-container">
        <button className={`multi-button skin ${jobView === "ALL" ? 'selected' : ''}`} onClick={() => {
            props.setJobView("ALL");
          }}>Jobs</button>
        <button className={`multi-button skin ${jobView === "POST" ? 'selected' : ''}`} onClick={() => {
            props.setJobView("POST");
          }}>Post</button>
        <button className={`multi-button skin ${jobView === "FIND" ? 'selected' : ''}`} onClick={() => {
            props.setJobView("FIND");
          }}>Find</button>
      </div>
    
  
  );
}
