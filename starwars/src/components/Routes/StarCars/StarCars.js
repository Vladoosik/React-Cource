import { StarShip } from "./style";

function StarCars({ value }) {
  return (
    <StarShip>
      <h1>HELLO STAR CARS</h1>
      {value.map((item) => {
        return <p>{item.name}</p>;
      })}
    </StarShip>
  );
}
export default StarCars;
