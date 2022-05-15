import React from "react";
import Header from "../Header/Header";
import EasyAndUseful from "../easyAndUseful/Managment";
import Service from "../Service/Service";
import Clients from "../clients/Clients";
import OurTeam from "../ourTeam/ourTeam";

export function Main() {
  return (
    <div>
      <Header />
      <EasyAndUseful />
      <Service />
      <Clients />
      <OurTeam />
    </div>
  );
}
