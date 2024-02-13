import * as React from "react"
import Svg, { Rect } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={18}
    fill="none"
    {...props}
  >
    <Rect width={12} height={17.143} fill="#161F51" rx={3} />
  </Svg>
)
export default SvgComponent
