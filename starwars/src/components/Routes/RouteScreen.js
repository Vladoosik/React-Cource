import { Routes, Route, useLocation } from "react-router-dom";
import { MainPage, Films, Planets, StarCars, Peoples } from "./index";
import { ArrayBtn, FilmsPhoto } from "../../constants/MockData";
import { useCallback, useEffect, useState } from "react";
import HeaderComponent from "../mainPage/components/header/header";

function RouteScreen() {
  const films = "films";
  const peoples = "people";
  const planets = "planets";
  const starshipsStr = "starships";

  const [data, setData] = useState([]);
  let [value, setValue] = useState([]);
  let [film, setFilm] = useState([]);
  let [url, setUrl] = useState(`https://swapi.dev/api/${film}`);

  let navigation = useLocation();

  const fetchPage = useCallback(async () => {
    if (navigation.pathname === "/films") {
      await setUrl(`https://swapi.dev/api/${films}`);
      console.log("Вкладка фильмов", url);
    } else if (navigation.pathname === "/starships") {
      await setUrl(`https://swapi.dev/api/${starshipsStr}`);
      console.log("Вкладка космических машин", url);
    } else if (navigation.pathname === "/people") {
      await setUrl(`https://swapi.dev/api/${peoples}`);
      console.log("вкладка люди", url);
    } else if (navigation.pathname === "/planets") {
      await setUrl(`https://swapi.dev/api/${planets}`);
      console.log("вкладка планет", url);
    } else {
      console.log("Ничего не работает");
    }
  }, [navigation]);

  useEffect(async () => {
    fetchPage();
  }, [fetchPage()]);

  useEffect(() => {
    const saveGradient = FilmsPhoto.map((e) => e);
    setFilm(saveGradient);
  }, []);

  useEffect(() => {
    fetch(url)
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
              color={"white"}
              onClick={fetchPage()}
            />
          }
        >
          <Route exact path={"/"} element={<MainPage />} />
          <Route path={"/films"} element={<Films value={value} />} />
          <Route path={"/starships"} element={<StarCars value={value} />} />
          <Route path={"/planets"} element={<Planets value={value} />} />
          <Route path={"/peoples"} element={<Peoples value={value} />} />
        </Route>
      </Routes>
    </>
  );
}

export default RouteScreen;
