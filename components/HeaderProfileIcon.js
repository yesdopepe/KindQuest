import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={30}
    fill="none"
    {...props}
  >
    <Path
      fill="#7082E4"
      d="M14.321 14.31c3.19 0 5.774-2.504 5.774-5.592 0-3.09-2.585-5.593-5.774-5.593S8.547 5.629 8.547 8.718c0 3.088 2.585 5.592 5.774 5.592Z"
    />
    <Path
      fill="#7082E4"
      fillRule="evenodd"
      d="M5.162 22.089c-.001-.394.09-.782.266-1.136.553-1.072 2.112-1.64 3.407-1.896.933-.193 1.88-.322 2.831-.386a31.27 31.27 0 0 1 5.299 0c.952.064 1.898.193 2.832.386 1.294.257 2.854.77 3.407 1.896.354.722.354 1.56 0 2.282-.553 1.125-2.113 1.64-3.407 1.886-.933.2-1.88.333-2.832.396-1.435.118-2.876.14-4.314.064-.332 0-.653 0-.985-.064a19.2 19.2 0 0 1-2.82-.396c-1.306-.247-2.854-.761-3.418-1.886a2.598 2.598 0 0 1-.266-1.146Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
