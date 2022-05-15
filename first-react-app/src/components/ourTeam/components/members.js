import FacebookSvg from "../../../assets/svg/facebookSvg";
import GithubSvg from "../../../assets/svg/githubSvg";
import LinkedinSvg from "../../../assets/svg/linkedinSvg";
import InstagramSvg from "../../../assets/svg/instagramSvg";
import TwitterSvg from "../../../assets/svg/twitterSvg";
import { memberText } from "../../../constants/MockData";

export function Members(props) {
  const { img, name } = props;
  return (
    <div className={"member1"}>
      <img src={img} alt="member" className={"memberImg"} />
      <p className={"memberName"}>{name}</p>
      <p className={"memberDesc"}>{memberText}</p>
      <div className={"memberLinks"}>
        <FacebookSvg
          height={30}
          width={30}
          color={"black"}
          color2={"transparent"}
        />
        <GithubSvg height={30} width={30} color={"black"} />
        <LinkedinSvg height={30} width={30} color={"black"} />
        <InstagramSvg height={30} width={30} color={"black"} />
        <TwitterSvg height={30} width={30} color={"black"} />
      </div>
    </div>
  );
}
