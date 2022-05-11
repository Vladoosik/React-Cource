function Circle(props) {
  const { width, height, color } = props;

  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      className="circle"
      viewBox="0 0 120 120"
    >
      <circle fill={color} cx="60" cy="60" r="50"></circle>
    </svg>
  );
}
export default Circle;
