import { clientText } from "../../constants/MockData";

export function ClientReviews(props) {
  const { image, name } = props;

  return (
    <div className={"review"}>
      <img src={image} alt="customer" className={"photoCustomer"} />
      <div className={"reviewInfo"}>
        <p className="customerName">{name}</p>
        <p className="textReview">{clientText}</p>
      </div>
    </div>
  );
}