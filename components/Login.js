import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import BackgroundImageEffect from "./BackgroundImageEffect";
import InputField from "./InputField";
import { variables } from "../variables";
import { Arapey_400Regular_Italic, useFonts } from "@expo-google-fonts/arapey";
import AppLoading from "expo-app-loading";

const Login = () => {
  const [isFontLoaded] = useFonts({ Arapey_400Regular_Italic });

  if (!isFontLoaded) return <AppLoading />;
  return (
    <View style={styles.login}>
      <BackgroundImageEffect />
      <View
        style={{
          alignSelf: "flex-start",
          position: "absolute",
          top: variables.DIMENSIONS.height / 4,
          left: 15,
        }}>
        <Text
          style={{
            fontSize: 50,
            fontFamily: "Arapey_400Regular_Italic",
            color: "blue",
          }}>
          Login
        </Text>
        <View style={{ borderWidth: 1, borderColor: "blue" }}></View>
      </View>
      <View style={styles.form}>
        <View style={{ marginVertical: 10 }}>
          <InputField placeholder="Email or Phone" />
        </View>
        <View style={{ marginVertical: 10 }}>
          <InputField placeholder="Password" secureTextEntry={true} />
        </View>
        <View
          style={{ width: "50%", alignSelf: "flex-end", marginVertical: 10 }}>
          <TouchableHighlight
            style={{
              width: "100%",
              backgroundColor: "blue",
              borderRadius: 20,
              height: 40,
              justifyContent: "center",
            }}
            activeOpacity={0.3}
            underlayColor="efefef"
            onPress={() => console.log("pressed")}>
            <Text
              style={{
                color: "white",
                fontFamily: "Arapey_400Regular_Italic",
                fontSize: 24,
                textAlign: "center",
              }}>
              Login
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
  },
  form: {
    marginVertical: variables.DIMENSIONS.height / 3,
    padding: 10,
  },
});

export default Login;
