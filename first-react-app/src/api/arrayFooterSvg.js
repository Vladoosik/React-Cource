import Tower from "../assets/svg/Tower";
import Download from "../assets/svg/download";
import User from "../assets/svg/user";
import {
  business,
  downloads,
  installs,
  lowerBusiness,
  lowerDownloads,
  lowerInstalls,
  lowerProUsers,
  proUsers,
} from "../constants/MockData";

export const arrayFooterSvg = [
  {
    svg: (
      <Tower className={"Tower"} width={100} height={100} color={"#5fa3be"} />
    ),
    text: business,
    lowerText: lowerBusiness,
    color: "#5fa3be",
  },
  {
    svg: (
      <Download
        className={"Tower"}
        width={100}
        height={100}
        color={"rgb(130, 177, 255)"}
      />
    ),
    text: downloads,
    lowerText: lowerDownloads,
    color: "rgb(130, 177, 255)",
  },
  {
    svg: (
      <User
        className={"Tower"}
        width={100}
        height={100}
        color="rgb(179, 136, 255)"
      />
    ),
    text: installs,
    lowerText: lowerInstalls,
    color: "rgb(179, 136, 255)",
  },
  {
    svg: (
      <Download
        className={"Tower"}
        width={100}
        height={100}
        color={"rgb(234, 128, 252)"}
      />
    ),
    text: proUsers,
    lowerText: lowerProUsers,
    color: "rgb(234, 128, 252)",
  },
];
