import React, { useContext, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { Arapey_400Regular } from "@expo-google-fonts/arapey";
import AppLoading from "expo-app-loading";
import { PositionContext } from "./PositionContext";

const Welcome = () => {
  const { position, setPosition } = useContext(PositionContext);

  const [isFontLoaded] = useFonts({
    Inter_900Black,
    Arapey_400Regular,
  });

  if (!isFontLoaded) {
    return <AppLoading />;
  } else {
    return (
      //top part of the page -- Welcome component
      <View
        style={position === "bottom" ? styles.container : { display: "none" }}>
        <View>
          <Text style={styles.smallTitle}>Welcome to the</Text>
          <Text style={styles.largeTitle}>Price World</Text>
          <Text style={styles.slogan}>Know prices before shopping.</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
  },

  smallTitle: {
    fontFamily: "Arapey_400Regular",
    color: "#000",
    fontSize: 30,
    padding: 5,
  },
  largeTitle: {
    fontSize: 55,
    fontFamily: "Inter_900Black",
    fontWeight: "800",
    color: "blue",
    textShadowColor: "white",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontStyle: "italic",
  },

  slogan: {
    fontSize: 14,
    alignSelf: "center",
    fontFamily: "Inter_900Black",
    color: "#000",
    fontStyle: "italic",
  },
});

export default Welcome;
