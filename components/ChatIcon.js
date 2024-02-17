import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#7082E4"
      fillRule="evenodd"
      d="M.189 12.5C.189 5.596 5.967 0 13.094 0 20.222 0 26 5.596 26 12.5S20.222 25 13.094 25a13.21 13.21 0 0 1-5.5-1.189l-5.855 1.163a1.33 1.33 0 0 1-.63-.028 1.3 1.3 0 0 1-.541-.313 1.243 1.243 0 0 1-.324-.524 1.212 1.212 0 0 1-.028-.61l1.2-5.671A12.13 12.13 0 0 1 .19 12.5Zm9.034-1.25c-.343 0-.67.132-.913.366a1.23 1.23 0 0 0-.378.884c0 .332.136.65.378.884.242.234.57.366.913.366h7.743c.342 0 .67-.132.913-.366a1.23 1.23 0 0 0 .378-.884c0-.332-.136-.65-.378-.884a1.312 1.312 0 0 0-.913-.366H9.223Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
