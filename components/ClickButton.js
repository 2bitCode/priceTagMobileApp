import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const ClickButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text>Click me sir!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: null,
    borderRadius: 15,
    backgroundColor: "blue",
    padding: 8,
    shadowColor: "white",
    shadowRadius: 10,
    shadowOffset: { width: -4, height: 4 },
  },
});

export default ClickButton;
