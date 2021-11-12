import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
import { Dimensions } from "react-native";

export default SvgComponent = () => {
  const { width, height } = Dimensions.get("window");

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="50%"
      height="50%"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0  100 100"
      preserveAspectRatio="xMinYMin"
    >
      <Rect
        id="svgEditorBackground"
        x={`${width / 2}`}
        y={`${height / 2}`}
        width={`${width}`}
        height={`${height}`}
        style="fill: red; stroke: black;"
      />
      <Path
        d="M-4-4v8.1566c4,0.8434,3.2757-7.5966,12.5217-2.6638v-5.4928Z"
        style="fill:rosybrown; stroke:black; vector-effect:non-scaling-stroke;stroke-width:1px;"
        id="e1_shape"
        transform="matrix(50.8658, 0, 0, 50.8658, 658.485, 407.576)"
      />
    </Svg>
  );
};
