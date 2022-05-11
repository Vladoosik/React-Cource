import Button from "../../button/Button";
import { player, playerText } from "../../../constants/MockData";

function Video() {
  return (
    <div className={"video"}>
      <Button className={"player"} text={player} />
      <p className={"playerText"}>{playerText}</p>
    </div>
  );
}

export default Video;
