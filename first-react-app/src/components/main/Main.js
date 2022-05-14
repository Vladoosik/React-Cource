import React from "react";
import Header from "../Header/Header";
import EasyAndUseful from "../easyAndUseful/Managment";
import Service from "../Service/Service";
import Clients from "../clients/Clients";

export function Main() {
  return (
    <div>
      <Header />
      <EasyAndUseful />
      <Service />
      <Clients />
    </div>
  );
}
