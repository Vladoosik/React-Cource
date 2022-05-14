import { TitleCard } from "../../../constants/MockData";

export function ManagementCards(props) {
  const { svg, text } = props;

  return (
    <div className={"managementCard3"}>
      <div className={"random"}>{svg}</div>
      <p className={"titleCard1"}>{TitleCard}</p>
      <p className={"textCard1"}>{text}</p>
    </div>
  );
}
