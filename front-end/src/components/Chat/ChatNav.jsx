import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import "./Chat.css";
import useAppData from "../helpers/hooks/useAppData";

export default function ChatNav(props) {
  const { state, setJobView } = useAppData();
  return (
    <div
      className="bottom-nav"
      onClick={() => {
        props.setJobView("MESSAGE");
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
