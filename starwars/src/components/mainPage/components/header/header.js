import React from "react";
import { Header } from "./style";
import StarWarsSvg from "../../../../assets/svg/starwars";
import BtnParents from "./headerComponent/BtnContainer";
import { Link, Outlet } from "react-router-dom";

function HeaderComponent(props) {
  const { data, onCLick, show, width, height, color } = props;
  return (
    <>
      <Header>
        <Link to={-1}>
          <StarWarsSvg
            width={width}
            height={height}
            color={color}
            onClick={onCLick}
          />
        </Link>
        <BtnParents data={data} onClick={onCLick} show={show} />
      </Header>
      <Outlet />
    </>
  );
}
export default HeaderComponent;
