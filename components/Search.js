import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill= {props.focused ? "#101842": "#101842B8"}
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M7.719 11.153a7.435 7.435 0 1 1 14.87 0 7.435 7.435 0 0 1-14.87 0ZM15.153 0a11.152 11.152 0 1 0 6.461 20.24l5.236 5.237a1.858 1.858 0 0 0 2.628-2.629l-5.234-5.234A11.152 11.152 0 0 0 15.154.001Z"
        clipRule="evenodd"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default SvgComponent
