import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={12}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#161F51"
        d="M0 1.316V.933C0 .686.092.448.256.273A.848.848 0 0 1 .875 0h12.25c.232 0 .455.098.619.273a.966.966 0 0 1 .256.66v.383L7 5.983 0 1.316ZM7.232 6.93a.418.418 0 0 1-.464 0L0 2.417v7.85c0 .247.092.485.256.66a.848.848 0 0 0 .619.273h12.25a.848.848 0 0 0 .619-.273.966.966 0 0 0 .256-.66v-7.85L7.232 6.929Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h14v11.2H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent