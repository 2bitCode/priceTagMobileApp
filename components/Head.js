import React from "react";
import { View, Text, Image } from "react-native";
import { variables } from "../variables";

const Head = ({ text }) => {
  return (
    <View
      style={{
        height: variables.DIMENSIONS.height / 4,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}>
      <Image
        source={require("../assets/Images/bg.jpg")}
        style={{
          borderRadius: 500,
          width: "40%",
          height: "70%",
        }}
      />
      <Text
        style={{
          fontFamily: "Arapey_400Regular_Italic",
          color: "blue",
          fontSize: 40,
          padding: 10,
        }}>
        {text}
      </Text>
    </View>
  );
};

export default Head;
