import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={34}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill= {props.focused ? "#101842": "#101842B8"}
        d="M10.075 25.15H5.35c-.742 0-1.35-.607-1.35-1.35V10.3c0-.743.608-1.35 1.35-1.35h4.725c.743 0 1.35.607 1.35 1.35v13.5c0 .742-.607 1.35-1.35 1.35ZM19.863.85h-4.725c-.743 0-1.35.607-1.35 1.35v21.6c0 .742.607 1.35 1.35 1.35h4.725c.742 0 1.35-.607 1.35-1.35V2.2c0-.743-.608-1.35-1.35-1.35Zm9.787 10.8h-4.725c-.742 0-1.35.607-1.35 1.35v10.8c0 .742.608 1.35 1.35 1.35h4.725c.743 0 1.35-.607 1.35-1.35V13c0-.742-.607-1.35-1.35-1.35Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default SvgComponent
