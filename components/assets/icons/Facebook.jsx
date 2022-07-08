import * as React from "react";

function Facebook(props) {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path d="M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8.1c0 4 2.9 7.3 6.8 8v-5.6h-2V8.1h2V6.3c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.3V8h2.2l-.4 2.3H9.2V16c3.9-.6 6.8-3.9 6.8-8z" />
    </svg>
  );
}

const MemoFacebook = React.memo(Facebook);
export default MemoFacebook;
