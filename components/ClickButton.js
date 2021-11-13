import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { useFonts, Arapey_400Regular } from "@expo-google-fonts/arapey";
import AppLoading from "expo-app-loading";

const { width, height } = Dimensions.get("window");

const ClickButton = () => {
  const [isFontLoaded] = useFonts({
    Arapey_400Regular,
  });

  if (!isFontLoaded) return <AppLoading />;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.text}>Choose from this catagory</Text>
        <Image
          source={require("../assets/Images/down-arrow.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: width / 2,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "white",
    padding: 8,
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    alignSelf: "flex-end",
  },
  text: {
    color: "black",
    fontFamily: "Arapey_400Regular",
    fontSize: 20,
    paddingRight: 14,
  },
});

export default ClickButton;
