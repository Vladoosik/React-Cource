import DartsSvg from "../../../assets/svg/darts";
import Button from "../../button/Button";
import { btnSignIn } from "../../../constants/MockData";

function HeaderHead(props) {
  const { width, height, color, arrayBtn } = props;

  return (
    <div className={"headerHead"}>
      <div className={"headerLogo"}>
        <DartsSvg width={width} height={height} color={color} />
        <p className={"logoP"}>
          Dart
          <br />
          Service Manager
        </p>
      </div>
      <div className={"headerBtn"}>
        {arrayBtn.map((text, id) => {
          return <Button key={id} className={"btn1"} text={text.text} />;
        })}
      </div>
      <div className={"headerSign"}>
        <Button className={"btnSignIn"} text={btnSignIn} />
      </div>
    </div>
  );
}

export default HeaderHead;
