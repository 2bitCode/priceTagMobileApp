import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Welcome from "../components/Welcome";
import Svg, { Image, ClipPath, Circle } from "react-native-svg";
import ClickButton from "../components/ClickButton";

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
      //Catagory selection part
      <View style={styles.catagory}>
        <ClickButton />
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
    top: bgImageHeight + 15,
    left: 0,
    width: "100%",
    alignItems: "center",
  },
});

export default Home;
