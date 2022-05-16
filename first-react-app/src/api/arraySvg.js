import CalendarSvg from "../assets/svg/calendar";
import ManSvg from "../assets/svg/man";
import HealthSvg from "../assets/svg/health";
import { headerText } from "../constants/MockData";

export const arraySvg = [
  {
    svg: <CalendarSvg color="#5fa3be" width={100} height={100} />,
    text: headerText,
  },
  {
    svg: <ManSvg color="black" width={100} height={100} />,
    text: headerText,
  },
  {
    svg: <HealthSvg color="rgb(234, 128, 252)" width={100} height={100} />,
    text: headerText,
  },
];
