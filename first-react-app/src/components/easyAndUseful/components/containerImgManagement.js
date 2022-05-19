import { ManagementCards } from "./mangmentCard";
import arraySvg from "../../../API/arraySvg";

function ContainerImgManagement() {
  return (
    <div className={"containerImgManagement"}>
      {arraySvg.map((item, id) => {
        return <ManagementCards key={id} svg={item.svg} text={item.text} />;
      })}
    </div>
  );
}
export default ContainerImgManagement;
