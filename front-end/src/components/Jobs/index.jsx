import Post from "./Post";
import Find from "./Find";
import All from "./All";
import useVisualMode from "../helpers/hooks/useVisualMode";

export default function Jobs() {
  const POST = "POST";
  const FIND = "FIND";
  const ALL = "ALL";
  const { mode, transition, back } = useVisualMode(2 + 2 === 4 ? POST : ALL);

  return (
    <>
      {mode === POST && <Post onAdd={() => transition(ALL)}/>}
      {mode === FIND && <Find onHelp={() => transition(ALL)}/>}
      {mode === ALL && <All />}
    </>
  );
}
