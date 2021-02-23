import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import "./Chat.css";

export default function ChatNav({ setJobView }) {
  return (
    <div
      className="bottom-nav"
      onClick={() => {
        setJobView("MESSAGE");
      }}
    >
      <IconButton aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="secondary">
          <MailIcon />
        </Badge>
      </IconButton>
      Messages
    </div>
  );
}
