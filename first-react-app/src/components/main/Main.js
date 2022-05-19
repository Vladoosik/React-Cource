import React from "react";
import Header from "../Header/Header";
import EasyAndUseful from "../easyAndUseful/Managment";
import Service from "../Service/Service";
import Clients from "../clients/Clients";
import OurTeam from "../ourTeam/ourTeam";
import ContactUs from "../contactUs/contactUs";
import Footer from "../footer/footer";

export function Main() {
  return (
    <div>
      <Header />
      <EasyAndUseful />
      <Service />
      <Clients />
      <OurTeam />
      <ContactUs />
      <Footer />
    </div>
  );
}
