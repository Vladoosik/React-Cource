function CalendarSvg(props) {
  const { width, height, color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      x="0"
      y="0"
      enableBackground={color}
      version="1.1"
      viewBox="0 0 31.622 31.621"
      xmlSpace="preserve"
    >
      <path
        fill={color}
        d="M31.43 4.945a2.162 2.162 0 00-2.162-2.162h-3.656V.882A.882.882 0 0024.73 0h-1.905a.884.884 0 00-.883.882v1.902H9.802V.882A.882.882 0 008.92 0H7.142a.882.882 0 00-.882.882v1.902H2.35A2.162 2.162 0 00.188 4.946v7.704h1.139v16.749c0 1.229.995 2.223 2.223 2.223h24.394a2.221 2.221 0 002.223-2.223v-16.75h1.267l-.004-7.704zM26.624 25.73a2.221 2.221 0 01-2.223 2.223H7.218a2.222 2.222 0 01-2.223-2.223V12.649h21.628V25.73h.001z"
      ></path>
      <path
        fill={color}
        d="M8.031 15.051H11.572000000000001V18.72H8.031z"
      ></path>
      <path fill={color} d="M14.102 15.051H17.643V18.72H14.102z"></path>
      <path fill={color} d="M20.172 15.051H23.714V18.72H20.172z"></path>
      <path
        fill={color}
        d="M8.031 21.502H11.572000000000001V25.169999999999998H8.031z"
      ></path>
      <path
        fill={color}
        d="M14.102 21.502H17.643V25.169999999999998H14.102z"
      ></path>
      <path
        fill={color}
        d="M20.172 21.502H23.714V25.169999999999998H20.172z"
      ></path>
    </svg>
  );
}

export default CalendarSvg;
