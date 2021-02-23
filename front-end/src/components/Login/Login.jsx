import { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import { useCookies, withCookies } from "react-cookie";

const users = ["user1@gmail.com", "user2@gmail.com"];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function Login(props) {
  const [cookie, setCookie] = useCookies();

  function handleCookie(id) {
    setCookie("user", id, {
      path: "/",
    });
  }
  const classes = useStyles();
  const { onClose, selectedValue, open, setCurrentUser } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    // onClose(value);
    value === "user1@gmail.com" ? setCurrentUser(1) : setCurrentUser(2);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <List>
        {users.map((user) => (
          <ListItem button onClick={() => handleListItemClick(user)} key={user}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={user} />
          </ListItem>
        ))}

        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("addAccount")}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  );
}

// Login.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
// };

export default function PleaseLogin(props) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(users[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      {/* <Typography variant="subtitle1">Selected: {selectedValue}</Typography> */}
      <br />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Please Log in first
      </Button>
      <Login
        setCurrentUser={props.setCurrentUser}
        removeCurrentUser={props.removeCurrentUser}
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}

// return (
//   <div>
//     <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
//     <br />
//     <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//       Open simple dialog
//     </Button>
//     <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
//   </div>
// );
