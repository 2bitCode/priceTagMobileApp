import React, { useContext, useEffect } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useFonts, Arapey_400Regular } from "@expo-google-fonts/arapey";
import AppLoading from "expo-app-loading";
import { PositionContext } from "../components/Context";
import { variables } from "../variables";
import { AntDesign } from "@expo/vector-icons";

const ClickButton = (props) => {
  const { position, setPosition } = useContext(PositionContext);

  useEffect(() => {
    setPosition("bottom");

    return () => setPosition(null);
  }, [variables.DIMENSIONS.width]);

  const [isFontLoaded] = useFonts({
    Arapey_400Regular,
  });

  if (!isFontLoaded) return <AppLoading />;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => {
          setPosition(position === "bottom" ? "top" : "bottom");
        }}>
        <Text style={styles.text}>Choose from this catagory</Text>
        <AntDesign
          name={`${position === "bottom" ? "down" : "up"}`}
          size={30}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: variables.DIMENSIONS.width / 1.5,
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
