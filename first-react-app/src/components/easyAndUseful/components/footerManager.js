import { FooterCardContainer } from "./footerCards";
import { arrayFooterSvg } from "../../../constants/MockData";

function FooterManager() {
  return (
    <div className={"FooterManagement"}>
      {arrayFooterSvg.map((item, id) => {
        return (
          <FooterCardContainer
            key={id}
            svg={item.svg}
            uppertext={item.text}
            lowerText={item.lowerText}
            color={item.color}
          />
        );
      })}
    </div>
  );
}
export default FooterManager;
