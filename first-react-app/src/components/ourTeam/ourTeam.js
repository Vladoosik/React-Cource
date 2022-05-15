import "./team-style.css";
import TeamTextContainer from "./components/teamTextContainer";
import { Members } from "./components/members";
import { arrayTeam } from "../../constants/MockData";
import { logDOM } from "@testing-library/react";

function OurTeam() {
  return (
    <div className={"ourTeam"}>
      <TeamTextContainer />
      <div className={"teamMembers"}>
        {arrayTeam.map((item, id) => {
          const getDataFromArray = () => {
            for (let i = 0; i < item.social.length; i++) {
              console.log(i);
            }
          };
          return (
            <Members
              key={id}
              name={item.name}
              img={item.img}
              social={getDataFromArray()}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OurTeam;
