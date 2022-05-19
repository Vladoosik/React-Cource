import {arrayLinks} from "../../../API/arrayLinks";


function FooterLinks() {
  return (
    <div className={"footerLinkContainer"}>
      <div className={"footerLinks"}>
        <a href="#">Privacy Policy</a>
        <a href="#">About Us</a>
        <a href="#">Term Of Use</a>
      </div>
      <div className={"footerSvg"}>
        {arrayLinks.map((item, id) => {
          return item;
        })}
      </div>
    </div>
  );
}

export default FooterLinks;
