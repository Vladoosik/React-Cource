import { FooterCardContainer } from "./footerCards";
import {arrayFooterSvg} from "../../../API/arrayFooterSvg";

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
