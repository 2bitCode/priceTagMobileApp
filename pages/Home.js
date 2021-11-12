import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import Welcome from "../components/Welcome";

const { width, height } = Dimensions.get("window");
const bgImageHeight = height / 1.5;
//main home component
const Home = () => {
  return (
    //top part of the page -- Welcome component
    <View style={styles.home}>
      <View
        style={{
          ...StyleSheet.absoluteFill,
          height: bgImageHeight,
          justifyContent: "center",
        }}
      >
        <Image
          style={styles.image}
          source={require("../assets/Images/bg.jpg")}
        />
        <Welcome />
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
    opacity: 0.4,
    position: "absolute",
    top: 0,
    left: 0,
  },
});

export default Home;
