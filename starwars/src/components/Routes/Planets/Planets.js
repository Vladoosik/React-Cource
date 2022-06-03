import { Planet } from "./style";

function Planets({ value }) {
  return (
    <Planet>
      <h1>HELLO PLANETS</h1>
      {value.map((item) => {
        return <p>{item.name}</p>;
      })}
    </Planet>
  );
}

export default Planets;
