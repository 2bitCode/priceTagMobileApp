import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Welcome from "../components/Welcome";
import Svg, { Image, ClipPath, Circle } from "react-native-svg";
import Navbar from "../components/Navbar";
import Catagory from "../components/Catagory";
import BackgroundImageEffect from "../components/BackgroundImageEffect";
import { PositionContext } from "../components/PositionContext";
import { variables } from "../variables";
import axios from "axios";
//main home component
const Home = ({ navigation }) => {
  const [position, setPosition] = useState(null);
  return (
    //top part of the page -- Welcome component
    <View style={styles.home}>
      <BackgroundImageEffect />
      <PositionContext.Provider value={{ position, setPosition }}>
        <Welcome />
        <Catagory />
      </PositionContext.Provider>

      <View style={styles.navbar}>
        <Navbar navigation={navigation} page="home" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "center",
  },

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
