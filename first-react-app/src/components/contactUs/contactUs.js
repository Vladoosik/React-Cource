import "./contact-style.css";
import ContactText from "./components/contactText";
import Inputs from "./components/Inputs";

function ContactUs() {
  return (
    <div className={"contactUs"}>
      <ContactText />
      <Inputs />
    </div>
  );
}

export default ContactUs;
