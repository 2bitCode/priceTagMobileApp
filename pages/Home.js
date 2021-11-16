import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Welcome from "../components/Welcome";
import Svg, { Image, ClipPath, Circle } from "react-native-svg";
import ClickButton from "../components/ClickButton";
import Navbar from "../components/Navbar";

const { width, height } = Dimensions.get("window");
const bgImageHeight = height / 1.33;
//main home component
const Home = () => {
  return (
    //top part of the page -- Welcome component
    <View style={styles.home}>
      <View
        style={{
          ...StyleSheet.absoluteFill,
        }}
      >
        <Svg height={bgImageHeight} width={width}>
          <ClipPath id="clip">
            <Circle r={bgImageHeight} />
          </ClipPath>
          <Image
            style={styles.image}
            href={require("../assets/Images/bg.jpg")}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clip)"
          />
        </Svg>
      </View>
      <Welcome />

      <View style={styles.catagory}>
        <ClickButton />
      </View>
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
    width: width,
    height: bgImageHeight,
    opacity: 0.45,
  },
  catagory: {
    position: "absolute",
    top: bgImageHeight + 20,
    left: 0,
    width: "100%",
    alignItems: "center",
  },
  navbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: height / 15,
    backgroundColor: "white",
  },
});

export default Home;
