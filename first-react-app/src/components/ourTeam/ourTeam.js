import "./team-style.css";
import TeamTextContainer from "./components/teamTextContainer";
import { Members } from "./components/members";
import { useEffect, useState } from "react";
import { arrayTeam } from "../../api/arrayTeam";

function OurTeam() {
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
