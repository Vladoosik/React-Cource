import React from "react";
import "./styleHeader.css";
import HeaderHead from "./components/headerHead";
import MainHeader from "./components/mainHeader";
import { arrayBtn } from "../../constants/MockData";

function Header() {
  return (
    <div className={"header"}>
      <HeaderHead arrayBtn={arrayBtn} width={60} height={60} color={"black"} />
      <MainHeader />
    </div>
  );
}

export default Header;
