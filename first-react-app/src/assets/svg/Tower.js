function Tower(props) {
  const { width, height, color, className } = props;

  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 532.745 532.745"
      version="1.1"
      viewBox="0 0 532.745 532.745"
      xmlSpace="preserve"
      className={className}
    >
      <path
        fill={color}
        d="M266.373 0L0 121.078 0 169.51 532.745 169.51 532.745 121.078z"
      ></path>
      <path
        fill={color}
        d="M48.431 193.725H96.862V460.09799999999996H48.431z"
      ></path>
      <path
        fill={color}
        d="M145.294 193.725H193.72500000000002V460.09799999999996H145.294z"
      ></path>
      <path
        fill={color}
        d="M242.157 193.725H290.588V460.09799999999996H242.157z"
      ></path>
      <path
        fill={color}
        d="M339.02 193.725H387.45099999999996V460.09799999999996H339.02z"
      ></path>
      <path
        fill={color}
        d="M435.882 193.725H484.313V460.09799999999996H435.882z"
      ></path>
      <path fill={color} d="M0 484.314H532.745V532.745H0z"></path>
    </svg>
  );
}
export default Tower;
