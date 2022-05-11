import { Calendar, Health, Man } from "../../../constants/constantsSvg";

export function ManagementCardCalendar(props) {
  const { width, height, text } = props;

  return (
    <div className={"managementCard1"}>
      <Calendar color="rgb(179, 136, 255)" width={width} height={height} />
      <p className={"titleCard1"}>Title Goes Here</p>
      <p className={"textCard1"}>{text}</p>
    </div>
  );
}
export function ManagementCardMan(props) {
  const { width, height, text } = props;

  return (
    <div className={"managementCard1"}>
      <Man color="black" width={width} height={height} />
      <p className={"titleCard1"}>Title Goes Here</p>
      <p className={"textCard1"}>{text}</p>
    </div>
  );
}

export function ManagementCardHealth(props) {
  const { width, height, text } = props;

  return (
    <div className={"managementCard3"}>
      <Health color="rgba(255, 36, 255, 0.8)" width={width} height={height} />
      <p className={"titleCard1"}>Title Goes Here</p>
      <p className={"textCard1"}>{text}</p>
    </div>
  );
}
