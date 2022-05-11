import React from "react";
import "./managment-style.css";
import Button from "../button/Button";
import TitleUseful from "./components/titleUseful";
import { btnStart, loremCard, loremM } from "../../constants/MockData";
import ContainerImgManagement from "./components/containerImgManagement";
import FooterManager from "./components/footerManager";

function EasyAndUseful() {
  return (
    <div className={"easyAndUseful"}>
      <TitleUseful text={loremM} />
      <ContainerImgManagement text={loremCard} width={100} height={100} />
      <Button className={"btnStart"} text={btnStart} />
      <FooterManager />
    </div>
  );
}

export default EasyAndUseful;
