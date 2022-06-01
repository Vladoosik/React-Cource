import { Routes, Route } from "react-router-dom";
import { MainPage, Films, Planets, StarCars, Peoples } from "./index";
import { ArrayBtn, ArrayFilmBtn, FilmsPhoto } from "../../constants/MockData";
import { useEffect, useState } from "react";
import HeaderComponent from "../mainPage/components/header/header";

function RouteScreen() {
  const [data, setData] = useState([]);
  let [value, setValue] = useState([]);
  let [film, setFilm] = useState([]);

  const films = "films";
  const API = `https://swapi.dev/api/${films}`;

  useEffect(() => {
    const saveGradient = FilmsPhoto.map((e) => e);
    setFilm(saveGradient);
  }, []);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((resp) => {
        setData(resp.results);
      });
  }, []);

  const completeTodo = async () => {
    const arr = [];
    for (let key in data) {
      for (let i = 0; i < data.length; i++) {
        arr[i] = await data[i];
        value = await Object.assign(data[key], film[key]);
      }
    }
    return arr;
  };

  useEffect(() => {
    completeTodo().then((p) => setValue(p));
  }, [data]);

  return (
    <>
      <Routes>
        <Route
          element={
            <HeaderComponent
              data={ArrayBtn}
              width={120}
              height={120}
              color={"black"}
            />
          }
        >
          <Route exact path={"/"} element={<MainPage />} />
          <Route path={"/films"} element={<Films value={value} />} />
          <Route path={"/planets"} element={<Planets />} />
          <Route path={"/starcars"} element={<StarCars />} />
          <Route path={"/peoples"} element={<Peoples />} />
        </Route>
      </Routes>
    </>
  );
}

export default RouteScreen;
