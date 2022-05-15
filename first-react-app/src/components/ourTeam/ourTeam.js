import "./team-style.css";
import TeamTextContainer from "./components/teamTextContainer";
import { Members } from "./components/members";
import { arrayTeam } from "../../constants/MockData";

function OurTeam() {
  return (
    <div className={"ourTeam"}>
      <TeamTextContainer />
      <div className={"teamMembers"}>
        {arrayTeam.map((item, id) => {
          return <Members key={id} name={item.name} img={item.img} />;
        })}
      </div>
    </div>
  );
}

export default OurTeam;
