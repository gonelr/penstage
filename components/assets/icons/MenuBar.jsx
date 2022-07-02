import * as React from 'react'

function MenuBar(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path
        d="M7 34.5V33h34v1.5H7zm0-9.7v-1.5h34v1.5H7zM7 15v-1.6h34V15H7z"
        fill="{{fill}}"
      />
    </svg>
  )
}

const MemoMenuBar = React.memo(MenuBar)
export default MemoMenuBar
