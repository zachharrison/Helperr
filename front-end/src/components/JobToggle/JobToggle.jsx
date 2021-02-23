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

export default function JobToggle(props) {
  const classes = useStyles();

  return (
  
      <div className="toggle-btn-container">
        <button className="multi-button skin skin1" onClick={() => {
            props.setJobView("ALL");
          }}>Jobs</button>
        <button className="multi-button skin skin2" onClick={() => {
            props.setJobView("POST");
          }}>Post</button>
        <button className="multi-button skin skin3" onClick={() => {
            props.setJobView("FIND");
          }}>Find</button>
      </div>
    
  
  );
}
