import React from "react";
import { View, Text } from "react-native";
import { variables } from "../variables";
import { Arapey_400Regular_Italic, useFonts } from "@expo-google-fonts/arapey";
import AppLoading from "expo-app-loading";

const Card = ({ text }) => {
  const [isFontLoaded] = useFonts({ Arapey_400Regular_Italic });

  if (!isFontLoaded) return <AppLoading />;
  return (
    <View
      style={{
        backgroundColor: "white",
        marginVertical: 25,
        marginHorizontal: variables.DIMENSIONS.width / 20,
        width: variables.DIMENSIONS.width / 2.5,
        height: variables.DIMENSIONS.height / 4,
        borderWidth: 3,
        borderColor: "#efefef",
        borderRadius: 15,
      }}>
      <Text
        style={{
          fontSize: 30,
          color: "blue",
          textAlign: "center",
          fontFamily: "Arapey_400Regular_Italic",
          padding: 5,
        }}>
        Catagory
      </Text>
      <Text style={{ textAlign: "center", marginVertical: 50 }}>{text}</Text>
    </View>
  );
};

export default Card;
