import React from "react";
import {View, StyleSheet} from 'react-native';
import {Svg, Image, Circle, ClipPath} from 'react-native-svg';
 import { variables } from "../variables";

const BackgroundImageEffect = () => {
    return (
        <View
        style={{
          ...StyleSheet.absoluteFill,
          position: 'absolute',
          top: 0,
          left: 0
        }}
      >
        <Svg
          height={variables.IMAGE.bgImageHeight}
          width={variables.DIMENSIONS.width}
        >
          <ClipPath id="clip">
            <Circle r={variables.IMAGE.bgImageHeight} />
          </ClipPath>
          <Image
            style={{
                flex: 1,
                width: variables.DIMENSIONS.width,
                height: variables.IMAGE.bgImageHeight,
                opacity: 0.45,
              }}
            href={require("../assets/Images/bg.jpg")}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clip)"
          />
        </Svg>
      </View>
    );
}

export default BackgroundImageEffect;