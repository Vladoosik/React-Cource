import { CircleSvg } from "../../../constants/constantsSvg";

export function FooterCardContainer(props) {
  const { svg, uppertext, lowerText, color } = props;

  return (
    <div className={"footerCard1"} style={{ backgroundColor: `${color}` }}>
      <div className={"svgContainer"}>
        <CircleSvg width={100} height={100} color={"white"} />
        {svg}
      </div>
      <p className={"footerManagementText"}>
        {uppertext}
        <br />
        {lowerText}
      </p>
    </div>
  );
}
