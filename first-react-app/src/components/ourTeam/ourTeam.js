import "./team-style.css";
import TeamTextContainer from "./components/teamTextContainer";
import { Members } from "./components/members";
import { arrayTeam } from "../../constants/MockData";
import { useEffect, useState } from "react";

function OurTeam() {
  const [state, setState] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(arrayTeam);
  }, [data]);

  return (
    <div className={"ourTeam"}>
      <TeamTextContainer />
      <div className={"teamMembers"}>
        {data.map((item, index) => {
          return (
            <Members
              key={index}
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
