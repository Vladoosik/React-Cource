import { Body } from "./main-style";
import "../../assets/img/mainBackground.png";
import HeaderComponent from "./components/header/header";
import MainTextComponent from "./components/mainText/mainText";
import CircleTextComponent from "./components/circleText/circleText";
import { ArrayBtn } from "../../constants/MockData";
import { useState } from "react";

function MainPage() {
  return (
    <Body>
      <MainTextComponent />
      <CircleTextComponent />
    </Body>
  );
}
export default MainPage;
