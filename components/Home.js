import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={34}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill= {props.focused ? "#101842": "#101842B8"}
        fillRule="evenodd"
        d="M16.72 1.54a2.87 2.87 0 0 1 1.797-.623 2.87 2.87 0 0 1 1.796.623l8.739 7.024 3.43 2.574c.142.106.26.237.347.386a1.215 1.215 0 0 1 .116.984c-.05.164-.134.316-.248.449a1.363 1.363 0 0 1-.411.325 1.445 1.445 0 0 1-1.05.109 1.417 1.417 0 0 1-.478-.233l-1.207-.905v10.243c0 .686-.29 1.345-.808 1.83a2.854 2.854 0 0 1-1.95.757h-5.518v-6.467c0-.686-.29-1.344-.808-1.83a2.855 2.855 0 0 0-1.95-.757c-.732 0-1.434.272-1.951.757a2.508 2.508 0 0 0-.808 1.83v6.467H10.24a2.854 2.854 0 0 1-1.951-.757 2.508 2.508 0 0 1-.808-1.83V12.252l-1.207.905c-.14.113-.304.197-.48.25a1.465 1.465 0 0 1-1.07-.095 1.362 1.362 0 0 1-.422-.33c-.116-.135-.201-.29-.251-.457a1.216 1.216 0 0 1 .134-1.001c.093-.15.217-.28.365-.385l3.43-2.574 8.74-7.025Z"
        clipRule="evenodd"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default SvgComponent
