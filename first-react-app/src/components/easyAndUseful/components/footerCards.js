import Circle from "../../../assets/svg/circle";
import Tower from "../../../assets/svg/Tower";
import Download from "../../../assets/svg/download";
import User from "../../../assets/svg/user";

export function FooterCard1() {
  return (
    <div className={"footerCard1"}>
      <div className={"svgContainer"}>
        <Circle width={100} height={100} color={"white"} />
        <Tower className={"Tower"} width={50} height={50} color={"#4f88a0"} />
      </div>
      <p className={"footerManagementText"}>
        12000+ <br /> Business
      </p>
    </div>
  );
}

export function FooterCard2() {
  return (
    <div className={"footerCard2"}>
      <div className={"svgContainer"}>
        <Circle width={100} height={100} color={"white"} />
        <Download
          className={"Tower"}
          width={50}
          height={50}
          color={"rgb(130, 177, 255)"}
        />
      </div>
      <p className={"footerManagementText"}>
        60000+
        <br />
        Downloads
      </p>
    </div>
  );
}

export function FooterCard3() {
  return (
    <div className={"footerCard3"}>
      <div className={"svgContainer"}>
        <Circle width={100} height={100} color={"white"} />
        <User
          width={50}
          height={50}
          color={"rgb(179, 136, 255)"}
          className={"Tower"}
        />
      </div>
      <p className={"footerManagementText"}>
        30000+
        <br />
        Free Installs
      </p>
    </div>
  );
}

export function FooterCard4() {
  return (
    <div className={"footerCard4"}>
      <div className={"svgContainer"}>
        <Circle width={100} height={100} color={"white"} />
        <Download
          className={"Tower"}
          width={100}
          height={100}
          color={"rgb(234, 128, 252)"}
        />
      </div>
      <p className={"footerManagementText"}>
        40000+
        <br />
        Pro Users
      </p>
    </div>
  );
}

// export function FooterCardContainer(props) {
//   const { width, height, color, amountDownloads, svgData } = props;
//
//   return (
//     <div className={"footerCard4"}>
//       <div className={"svgContainer"}>
//         <Circle width={100} height={100} color={"white"} />
//         {/*{svgData} className = {"Tower"} width={width} height={height} color=*/}
//         {/*{color}*/}
//       </div>
//       <p className={"footerManagementText"}>
//         {amountDownloads}
//         <br />
//         Pro Users
//       </p>
//     </div>
//   );
// }
