import React from "react";
import { View, StyleSheet, Text } from "react-native";
import InputField from "../components/InputField";
import { variables } from "../variables";
import Navbar from "../components/Navbar";

const Favourites = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Nothing to show here yet.</Text>
      <View style={styles.navbar}>
        <Navbar navigation={navigation} page="heart" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginLeft: 10,
    padding: 10,
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

export default Favourites;
