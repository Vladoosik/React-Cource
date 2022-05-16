import CalendarSvg from "../assets/svg/calendar";
import ManSvg from "../assets/svg/man";
import HealthSvg from "../assets/svg/health";
import Tower from "../assets/svg/Tower";
import Download from "../assets/svg/download";
import User from "../assets/svg/user";
import customer1 from "../assets/image/customer1.png";
import customer2 from "../assets/image/customer2.png";
import member1 from "../assets/image/memberTeam1.png";
import member2 from "../assets/image/memberTeam2.png";
import member3 from "../assets/image/memberTeam3.png";
import member4 from "../assets/image/memberTeam4.png";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "./constantsSvg";

export const loremM =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga laborum quas quo sed. Aliquid ducimus earum explicabo facilis ipsa molestiae mollitia placeat, reiciendis temporibus ullam!";
export const loremCard =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet, aspernatur consequatur consequuntur culpa eos et illum ipsa molestiae obcaecati officia perferendis qui rem sint!\n";
export const btnStart = "Get Started";

export const btnHome = "Home";
export const btnService = "Service";
export const btnExtension = "Extension";
export const btnPricing = "Pricing";
export const btnHelp = "Help";
export const btnSignIn = "Sign In";
export const btnBuy = "Buy Now";
export const btnFree = "Try for free";
export const player = "▶";
export const headerText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga laborum quas quo sed. Aliquid ducimus earum explicabo facilis ipsa molestiae mollitia placeat, reiciendis temporibus ullam!\n";
export const headerTitle = "Lorem ipsum\n" + "dolor sit amet elit";
export const playerText = "Watch the video";
export const TitleCard = "Title Goes Here";
export const clientText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquam, aspernatur at dolorem ex fuga fugiat ipsam ipsum iure maiores molestiae nihil placeat totam veritatis voluptatem voluptates? Cum doloremque, eos in nemo nihil nobis odio quo quos rerum? Aliquid distinctio enim incidunt modi officia porro repellendus repudiandae sit temporibus?\n";
export const memberText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut deleniti ea exercitationem facilis fuga, illo magnam nobis, perspiciatis placeat praesentium quas quidem rem sed.";

const business = "12000+";
const lowerBusiness = "Business";
const downloads = "60000+";
const lowerDownloads = "Downloads";
const installs = "30000+";
const lowerInstalls = "Installs";
const proUsers = "40000+";
const lowerProUsers = "Pro Users";

export const arrayBtn = [
  { text: btnHome },
  { text: btnService },
  { text: btnExtension },
  { text: btnPricing },
  { text: btnHelp },
];

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

export const arrayClients = [
  { name: "John Doe", image: customer1 },
  {
    name: "Khaleesi",
    image: customer2,
  },
];

export const arrayTeam = [
  {
    name: "Sophie Turner",
    img: member1,
    social: [Facebook, Github, Linkedin, Instagram, Twitter],
  },
  {
    name: "Elvis Brown",
    img: member2,
    social: [Facebook, Github, Linkedin, Instagram, Twitter],
  },
  {
    name: "Donald Johnson",
    img: member3,
    social: [Facebook, Github, Linkedin, Instagram, Twitter],
  },
  {
    name: "Cristian Bail",
    img: member4,
    social: [Facebook, Github, Linkedin, Instagram, Twitter],
  },
];
