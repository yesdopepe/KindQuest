import * as React from "react"
import Svg, {
  G,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={40}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Rect width={34} height={32} x={4} fill="#161F51" rx={8} />
    </G>
    <Path
      fill="url(#b)"
      fillRule="evenodd"
      d="M16.161 10.643h5.573c.7 0 1.37.29 1.864.801.494.513.771 1.207.771 1.931v7.59c.622 0 1.22-.257 1.659-.712.44-.456.687-1.073.687-1.717V10.73c0-1.218-.88-2.275-2.083-2.38-.175-.014-.35-.028-.526-.04a2.397 2.397 0 0 0-.864-.957A2.285 2.285 0 0 0 22.024 7H20.85c-.43 0-.851.122-1.218.353a2.396 2.396 0 0 0-.864.957 36.33 36.33 0 0 0-.526.04c-1.175.103-2.041 1.113-2.082 2.293Zm4.69-2.429c-.311 0-.61.128-.83.356-.22.228-.343.537-.343.859h3.519c0-.322-.124-.631-.344-.86a1.153 1.153 0 0 0-.83-.355h-1.172Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#c)"
      fillRule="evenodd"
      d="M12.642 13.375c0-.839.656-1.518 1.466-1.518h7.623c.81 0 1.466.68 1.466 1.518v9.107c0 .838-.657 1.518-1.466 1.518h-7.623a1.44 1.44 0 0 1-1.037-.445 1.546 1.546 0 0 1-.43-1.073v-9.107Zm7.495 3.719a.622.622 0 0 0-.092-.854.573.573 0 0 0-.825.095l-1.936 2.506-.71-.734a.575.575 0 0 0-.814.015.62.62 0 0 0-.014.843l1.172 1.214a.583.583 0 0 0 .448.177.57.57 0 0 0 .425-.227l2.346-3.035Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="b"
        x1={21.438}
        x2={21.438}
        y1={7}
        y2={20.964}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#DCE1FE" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={17.919}
        x2={17.919}
        y1={11.857}
        y2={24}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#DCE1FE" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default SvgComponent
