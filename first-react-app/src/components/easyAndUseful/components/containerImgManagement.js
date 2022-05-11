import {
  ManagementCardCalendar,
  ManagementCardHealth,
  ManagementCardMan,
} from "./mangmentCard";

function ContainerImgManagement(props) {
  const { text, width, height } = props;

  return (
    <div className={"containerImgManagement"}>
      <ManagementCardCalendar text={text} width={width} height={height} />
      <ManagementCardMan text={text} width={width} height={height} />
      <ManagementCardHealth text={text} width={width} height={height} />
    </div>
  );
}
export default ContainerImgManagement;
