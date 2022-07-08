import * as React from "react";

function Twitter(props) {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path d="M5 15c6 0 9.3-5 9.3-9.3v-.4c.6-.5 1.2-1 1.6-1.7-.6.3-1.2.4-1.9.5.7-.4 1.2-1.1 1.4-1.8-.6.4-1.4.7-2.1.8C12.1 1.8 10 1.7 8.7 3c-.7.7-1.1 1.9-.8 3-2.7-.1-5.1-1.3-6.8-3.4C.2 4.1.7 6 2.1 7c-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.2.1-.5.2-.8.2-.2 0-.4 0-.6-.1.4 1.3 1.7 2.3 3.1 2.3-1.2.9-2.6 1.4-4.1 1.4H0c1.5.9 3.2 1.4 5 1.4z" />
    </svg>
  );
}

const MemoTwitter = React.memo(Twitter);
export default MemoTwitter;
