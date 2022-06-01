import { Body } from "./main-style";
import "../../assets/img/mainBackground.png";
import HeaderComponent from "./components/header/header";
import MainTextComponent from "./components/mainText/mainText";
import CircleTextComponent from "./components/circleText/circleText";
import { ArrayBtn } from "../../constants/MockData";
import { useState } from "react";

function MainPage() {
  const [show, setShow] = useState(false);
  return (
    <Body>
      {/*<HeaderComponent*/}
      {/*  data={ArrayBtn}*/}
      {/*  onClick={() => {*/}
      {/*    console.log("I love Big Dick");*/}
      {/*  }}*/}
      {/*  show={show}*/}
      {/*  width={120}*/}
      {/*  height={120}*/}
      {/*  color={"white"}*/}
      {/*/>*/}
      <MainTextComponent />
      <CircleTextComponent />
    </Body>
  );
}
export default MainPage;
