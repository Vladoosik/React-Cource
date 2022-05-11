import {
  btnBuy,
  btnFree,
  headerText,
  headerTitle,
} from "../../../constants/MockData";
import Button from "../../button/Button";

function BlockHeadText() {
  return (
    <div className={"blockHeadText"}>
      <p className={"HeaderTitle"}>{headerTitle}</p>
      <p className={"HeaderText"}>{headerText}</p>
      <Button className={"btnBuy"} text={btnBuy} />
      <Button className={"btnFree"} text={btnFree} />
    </div>
  );
}

export default BlockHeadText;
