import "./clients-style.css";
import ClientText from "./ClientText";
import { ClientReviews } from "./clientReview";
import { arrayClients } from "../../api/arrayClients";

function Clients() {
  return (
    <div className={"clients"}>
      <ClientText />
      <div className={"clientReviews"}>
        {arrayClients.map((item, id) => {
          return <ClientReviews key={id} name={item.name} image={item.image} />;
        })}
      </div>
    </div>
  );
}

export default Clients;
