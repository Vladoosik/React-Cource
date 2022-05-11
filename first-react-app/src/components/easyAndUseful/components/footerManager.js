import {
  FooterCard1,
  FooterCard2,
  FooterCard3,
  FooterCard4,
  FooterCardContainer,
} from "./footerCards";
import { arraySvg } from "../../../constants/MockData";
import button from "../../button/Button";

function FooterManager() {
  return (
    <div className={"FooterManagement"}>
      <FooterCard1 />
      <FooterCard2 />
      <FooterCard3 />
      <FooterCard4 />
    </div>
  );
}
export default FooterManager;
