import "./team-style.css";
import TeamTextContainer from "./components/teamTextContainer";
import { Members } from "./components/members";
import {arrayTeam} from "../../API/arrayTeam";

function OurTeam() {
  return (
    <div className={"ourTeam"}>
      <TeamTextContainer />
      <div className={"teamMembers"}>
        {arrayTeam.map((item, id) => {
          return (
              <Members
                  key={id}
                  name={item.name}
                  img={item.img}
                  social={item.social}
              />
          );
        })}
      </div>
    </div>
  );
}

export default OurTeam;
