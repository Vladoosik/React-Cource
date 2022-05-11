function HealthSvg(props) {
  const { width, height, color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
    >
      <path
        fill={color}
        d="M24 25.133c4.973 0 9-4.057 9-9.066C33 11.057 28.973 7 24 7s-9 4.057-9 9.067c0 5.009 4.027 9.066 9 9.066z"
      ></path>
      <path
        fill={color}
        fillRule="evenodd"
        d="M18.125 28.954a1.1 1.1 0 00-1.246-.597C11.474 29.685 6 32.393 6 36.467V43h36v-6.534c0-4.073-5.474-6.781-10.879-8.11a1.1 1.1 0 00-1.246.598l-4.064 3h-3.622l-4.064-3zM31 31h2v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
export default HealthSvg;
