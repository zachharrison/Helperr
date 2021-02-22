import { useState, useRef } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Stars from "./Stars";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { BottomNavigation } from "@material-ui/core";
import "./Reviews.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  text: {
    textAlign: "center;",
    fontSize: "16px;",
  },
  paragraph: {
    fontSize: "46px;",
  },
  button: {
    textAlign: "center;",
  },
}));

export default function Reviews(props) {
  console.log("PROPS INSIDE REVIEW", props);
  const { helper_id, job_id, onSave } = props;

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [review, setReview] = useState("");
  const [starValue, setStarValue] = useState();
  const [error, setError] = useState("");

  const reviewInput = useRef(null);
  const handleOpen = () => {
    // reviewInput.current.focus();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const styles = (theme) => ({
    TheInput: {
      fontSize: 30,
      lineHeight: 2.4,
    },
  });

  Reviews = withStyles(styles)(Reviews);

  function validate() {
    if (review === "" || starValue === "") {
      setError("Please fill out the full review");
      return;
    }
    setError("");
    const newReview = {
      details: review,
      stars: starValue,
      helper_id,
      job_id,
    };
    onSave(newReview);
    handleClose();
  }

  return (
    <div>
      <div>
        <button type="button" onClick={handleOpen}>
          Completed
        </button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade
            in={open}
            starValue={starValue}
            setStarValue={setStarValue}
            review={review}
            setReview={setReview}
          >
            <div className={classes.paper}>
              <Stars starValue={starValue} setStarValue={setStarValue} />
              <p id="transition-modal-description" className={classes.text}>
                We appreciate your feedback.
              </p>
              <TextField
                ref={reviewInput}
                className={classes.paragraph}
                style={{ fontSize: "5rem" }}
                id="standard-basic"
                label="Review"
                onChange={(event) => setReview(event.target.value)}
                multiline
                rows={4}
                variant="filled"
                fullWidth
              />
              <span>{error}</span>
              <div className="flex-container">
                <button onClick={validate} className="add-icon">
                  +
                </button>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}
