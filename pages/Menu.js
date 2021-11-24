import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { variables } from "../variables";
import Navbar from "../components/Navbar";
import { Arapey_400Regular, useFonts } from "@expo-google-fonts/arapey";
import Apploading from "expo-app-loading";

const Menu = ({ navigation }) => {
  const [selected, setSelected] = useState(null);

  const [isFontLoaded] = useFonts({ Arapey_400Regular });

  if (!isFontLoaded) return <Apploading />;

  return (
    <View style={styles.container}>
      {variables.MENU.data.map((elem, index) => {
        return (
          <TouchableHighlight
            style={{
              ...styles.touchable,
              borderWidth: selected === index ? 1 : 0,
            }}
            key={index}
            activeOpacity={0.3}
            onPress={() => setSelected(index)}
            underlayColor="efefef"
          >
            <Text style={styles.text}>{elem}</Text>
          </TouchableHighlight>
        );
      })}
      <View style={styles.navbar}>
        <Navbar navigation={navigation} page="menu" />
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

  touchable: {
    width: "100%",
    height: variables.DIMENSIONS.height / 15,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "blue",
    borderTopWidth: 0,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    alignSelf: "center",
    fontSize: 20,
    fontFamily: "Arapey_400Regular",
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

export default Menu;
