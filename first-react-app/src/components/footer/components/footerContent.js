import DartsSvg from "../../../assets/svg/darts";
import Button from "../../button/Button";
import {arrayBtn} from "../../../API/arrayBtn";

function FooterContent() {
  return (
    <div className={"footerContent"}>
      <div className={"footerLogo"}>
        <DartsSvg color={"white"} width={50} hight={50} />
        <p className={"footerLogoText"}>
          Dart <br /> Service Manager
        </p>
      </div>
      <div className="footerBtn">
        {arrayBtn.map((text, id) => {
          return <Button key={id} className={"btn1"} text={text.text} />;
        })}
      </div>
    </div>
  );
}

export default FooterContent;
