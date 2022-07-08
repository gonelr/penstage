import * as React from "react";

function Mail(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path d="M9.3 37.4c-.8 0-1.4-.3-1.9-.8s-.8-1.2-.8-1.9V13.3c0-.8.3-1.4.8-1.9s1.2-.8 1.9-.8h29.4c.8 0 1.4.3 1.9.8s.8 1.2.8 1.9v21.4c0 .8-.3 1.4-.8 1.9s-1.2.8-1.9.8H9.3zm14.7-14l-16.3-11v22.3c0 .5.2.9.4 1.2.3.3.7.5 1.1.5h29.4c.5 0 .9-.2 1.2-.5s.5-.7.5-1.2V12.4L24 23.4zm0-1.4l15.5-10.3H8.6L24 22zM7.7 12.4v-.7 23c0 .5.2.9.4 1.2.3.3.7.5 1.1.5H7.7v-24z" />
    </svg>
  );
}

const MemoMail = React.memo(Mail);
export default MemoMail;
