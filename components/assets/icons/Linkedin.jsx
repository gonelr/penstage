import * as React from "react";

function Linkedin(props) {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path d="M0 1.1C0 .5.5 0 1.2 0h13.6c.7 0 1.2.5 1.2 1.1v13.7c0 .6-.5 1.1-1.2 1.1H1.2c-.7.1-1.2-.4-1.2-1V1.1zm4.9 12.3V6.2H2.5v7.2h2.4zM3.7 5.2c.8 0 1.4-.6 1.4-1.2 0-.7-.5-1.2-1.3-1.2s-1.4.4-1.4 1.1c0 .7.5 1.3 1.3 1.3zm5 8.2v-4c0-.2 0-.4.1-.6.1-.5.5-.9 1.2-.9.9 0 1.2.7 1.2 1.6v3.9h2.4V9.2C13.6 7 12.4 6 10.8 6 9.5 6 9 6.7 8.7 7.2v-1H6.3v7.2h2.4z" />
    </svg>
  );
}

const MemoLinkedin = React.memo(Linkedin);
export default MemoLinkedin;
