import { People } from "./style";

function Peoples({ value }) {
  return (
    <People>
      <h1>HELLO PEOPLES</h1>
      {value.map((item) => {
        return <p>{item.name}</p>;
      })}
    </People>
  );
}

export default Peoples;
