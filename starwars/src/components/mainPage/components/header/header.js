// modules
import React from "react";
import { Link, Outlet } from "react-router-dom";
// components
import BtnParents from "./headerComponent/BtnContainer";
// assets
import { Header } from "./style";
import StarWarsSvg from "../../../../assets/svg/starwars";

function HeaderComponent(props) {
  const { data, onCLick, show, width, height, color } = props;
  return (
    <>
      <header>
        <Header>
          <Link to={"/"}>
            <StarWarsSvg
              width={width}
              height={height}
              color={color}
              onClick={onCLick}
            />
          </Link>
          <BtnParents data={data} onClick={onCLick} show={show} />
        </Header>
      </header>
      <main>
        {" "}
        <Outlet />
      </main>
    </>
  );
}
export default HeaderComponent;
