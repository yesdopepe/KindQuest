import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={35}
    fill="none"
    {...props}
  >
    <Rect width={35} height={35} fill="#161F51" rx={15} />
    <Path
      stroke="#DFDEFF"
      strokeLinecap="round"
      strokeWidth={4}
      d="m9 18.429 7.714 6L27 12"
    />
  </Svg>
)
export default SvgComponent
