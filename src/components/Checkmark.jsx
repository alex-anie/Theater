
function SignupCard(props) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.SvgWeight}
        // height="24"
        height={props.SvgHeight}
        className="main-grid-item-icon inline-block"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </>
  );
}

export default SignupCard;
