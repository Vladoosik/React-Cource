import React, { useEffect } from "react";
import { observer } from "mobx-react";
import GetAPI from "../store/getAPI";

export default observer(() => {
  const { state, pending, getApi } = GetAPI;
  useEffect(() => {
    getApi("https://swapi.dev/api/");
  }, []);
  return <h1>shuiii</h1>;
});
