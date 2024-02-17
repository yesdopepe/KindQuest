import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={36}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
      fill={props.focused ? "#101842": "#101842B8"}
        fillRule="evenodd"
        d="M13.923 5.635a5.577 5.577 0 1 1 11.154 0 5.577 5.577 0 0 1-11.154 0Zm11.154 4.461a4.461 4.461 0 1 1 8.923 0 4.461 4.461 0 0 1-8.923 0ZM5 10.096a4.462 4.462 0 1 1 8.923 0 4.462 4.462 0 0 1-8.923 0Zm6.038 7.982a10.031 10.031 0 0 1 8.462-4.636 10.032 10.032 0 0 1 9.978 11.151 1.116 1.116 0 0 1-.554.845 18.88 18.88 0 0 1-9.424 2.504 18.872 18.872 0 0 1-9.424-2.504 1.116 1.116 0 0 1-.553-.845c-.25-2.28.284-4.578 1.515-6.514v-.001Z"
        clipRule="evenodd"
      />
      <Path d="M8.776 15.063a11.05 11.05 0 0 0-1.744 6.847c-.8-.122-1.588-.318-2.352-.587l-.153-.053a.75.75 0 0 1-.498-.65l-.013-.161a5 5 0 0 1 4.76-5.396Zm20.192 6.847a11.049 11.049 0 0 0-1.744-6.847 4.999 4.999 0 0 1 4.76 5.396l-.013.161a.75.75 0 0 1-.498.648l-.153.053c-.756.267-1.541.466-2.352.588Z" />
    </G>
    <Defs></Defs>
  </Svg>
)
export default SvgComponent
