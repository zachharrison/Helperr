import {useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Stars from './Stars';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { BottomNavigation } from '@material-ui/core';
import './Reviews.css';
import JobListItem2 from "../JobList/JobListItem2"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  text: {
    textAlign: 'center;',
    fontSize: '16px;'
  },
  paragraph: {
    fontSize: '46px;'
  },
  button: {
    textAlign: 'center;'
  }
}));



export default function Review({ cookies }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [review, setReview] = useState('')
  const [starValue, setStarValue] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const styles = theme => ({
    TheInput: {
      fontSize: 30,
      lineHeight: 2.4
    }
  });
  

  Review = withStyles(styles)(Review);
  
  // review_stars AS ENUM('0', '1', '2', '3', '4', '5');
  // review_who AS ENUM('helper', 'client');
  // review as details
  //  need job_id

  const saveReview = (userId) => {
    console.log(review, starValue, userId)
  };

  return (
    <div>
    <div>
      <button type="button" onClick={handleOpen}>
        Leave a Review
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
        <Fade in={open} starValue={starValue} setStarValue={setStarValue} review={review} setReview={setReview}>
          <div className={classes.paper}>
            <Stars starValue={starValue} setStarValue={setStarValue}/>
            <p id="transition-modal-description" className={classes.text}>We appreciate your feedback.</p>
            <TextField className={classes.paragraph} style={{ fontSize: '5rem' }} id="standard-basic" label="Review" onChange={(event) => setReview(event.target.value)} multiline rows={4} variant="filled" fullWidth/>
            <div className='flex-container'>
              <button onClick={() => saveReview(+cookies.user)} className='add-icon'>+</button>
            </div>
          </div>
        </Fade>


      </Modal>
    </div>
    <JobListItem2/>
    </div>
  );
}