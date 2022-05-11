function TitleUseful(props) {
  const { text } = props;

  return (
    <div className={"textManagement"}>
      <p className={"ManagementTitle"}>Easy & Useful</p>
      <p className={"projectManagementTools"}>Project Management Tool</p>
      <p className={"ManagementText"}>{text}</p>
    </div>
  );
}
export default TitleUseful;
