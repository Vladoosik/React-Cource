import Tower from "../assets/svg/Tower";
import Download from "../assets/svg/download";
import User from "../assets/svg/user";

const business = "12000+";
const lowerBusiness = "Business";
const downloads = "60000+";
const lowerDownloads = "Downloads";
const installs = "30000+";
const lowerInstalls = "Installs";
const proUsers = "40000+";
const lowerProUsers = "Pro Users";

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