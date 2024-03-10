const ShareIcon = ({ width = 12, height = 13 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 13"
      fill="none"
    >
      <path
        d="M9.5 3L2.5 10"
        stroke="#185AD9"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.5 8.135V3H4.365"
        stroke="#185AD9"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ShareIcon;
