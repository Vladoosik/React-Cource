import "./footer-style.css";
import FooterContent from "./components/footerContent";
import FooterLinks from "./components/footerLinks";

function Footer() {
  return (
    <div className={"footer"}>
      <FooterContent />
      <FooterLinks />
    </div>
  );
}

export default Footer;
