import { memberText } from "../../../constants/MockData";

export function Members(props) {
  const { img, name, social } = props;
  return (
    <div className={"member1"}>
      <img src={img} alt="member" className={"memberImg"} />
      <p className={"memberName"}>{name}</p>
      <p className={"memberDesc"}>{memberText}</p>
      <div className={"memberLinks"}>{social}</div>
    </div>
  );
}
