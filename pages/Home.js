import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Welcome from "../components/Welcome";
import Svg, { Image, ClipPath, Circle } from "react-native-svg";

import Navbar from "../components/Navbar";
import Catagory from "../components/Catagory";
import { PositionContext } from "../components/PositionContext";
import { variables } from "../variables";
//main home component
const Home = () => {
  const [position, setPosition] = useState(null);

  return (
    //top part of the page -- Welcome component
    <View style={styles.home}>
      <View
        style={{
          ...StyleSheet.absoluteFill,
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
            style={styles.image}
            href={require("../assets/Images/bg.jpg")}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clip)"
          />
        </Svg>
      </View>
      <PositionContext.Provider value={{ position, setPosition }}>
        <Welcome />
        <Catagory />
      </PositionContext.Provider>

      <View style={styles.navbar}>
        <Navbar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: variables.DIMENSIONS.width,
    height: variables.IMAGE.bgImageHeight,
    opacity: 0.45,
  },
  // catagory: {
  //   // position: "absolute",
  //   // top: bgImageHeight + 20,
  //   // left: 0,
  //   width: "100%",
  //   alignItems: "center",
  // },
  navbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: variables.DIMENSIONS.height / 15,
    backgroundColor: "white",
  },
});

export default Home;
