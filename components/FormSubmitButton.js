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
    <Rect width={35} height={35} fill="#161F51" rx={17.5} />
    <Path
      stroke="#DCE1FE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
      d="M13 18h10m0 0-5-5m5 5-5 5"
    />
  </Svg>
)
export default SvgComponent
