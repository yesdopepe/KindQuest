import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#161F51"
      d="M11.375 6.125v-1.75A4.333 4.333 0 0 0 7 0a4.333 4.333 0 0 0-4.375 4.375v1.75C1.137 6.125 0 7.263 0 8.75v6.125C0 16.363 1.137 17.5 2.625 17.5h8.75c1.488 0 2.625-1.137 2.625-2.625V8.75c0-1.487-1.137-2.625-2.625-2.625Zm-7-1.75C4.375 2.888 5.513 1.75 7 1.75c1.488 0 2.625 1.138 2.625 2.625v1.75h-5.25v-1.75Zm3.5 8.75c0 .525-.35.875-.875.875s-.875-.35-.875-.875V10.5c0-.525.35-.875.875-.875s.875.35.875.875v2.625Z"
    />
  </Svg>
)
export default SvgComponent
