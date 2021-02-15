import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

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
    <div className={classes.root}>
      <ButtonGroup
        color="primary"
        aria-label="outlined primary button group"
        style={{ margin: 30 }}
      >
        <Button
          onClick={() => {
            props.setJobView("ALL");
          }}
        >
          ALL
        </Button>
        <Button
          onClick={() => {
            props.setJobView("POST");
          }}
        >
          POST
        </Button>
        <Button
          onClick={() => {
            props.setJobView("FIND");
          }}
        >
          FIND
        </Button>
        <Button
          onClick={() => {
            props.setJobView("MESSAGE");
          }}
        >
          MESSAGE
        </Button>
      </ButtonGroup>
    </div>
  );
}
