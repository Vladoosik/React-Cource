import "../../../assets/img/mainBackground.png";
import "./style.css";
import { Film } from "./style";

function Films({ value }) {
  return (
    <Film>
      <div className={"todoFilms"}>
        <div className={"filmDesc"}>
          <p className={"descTitle"}>Films</p>
          <p className={"descText"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias
            assumenda aut beatae deleniti distinctio doloremque eos error
            molestiae natus pariatur perferendis, perspiciatis porro possimus,
            sequi sit soluta ullam vero!
          </p>
        </div>
        {value.map((item) => {
          return (
            <div className={"infoCard"}>
              <div className={"imgContainer"}>
                <img
                  src={`${item.uri}`}
                  alt="film pics"
                  className={"imgFilm"}
                />
              </div>
              <div className={"textContainer"}>
                <p className={"filmTitle"}>{item.title}</p>
                <p className={"filmText"}>{item.opening_crawl}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Film>
  );
}

export default Films;
