import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import BackgroundImageEffect from "../components/BackgroundImageEffect";
import InputField from "../components/InputField";
import { variables } from "../variables";
import { Arapey_400Regular_Italic, useFonts } from "@expo-google-fonts/arapey";
import AppLoading from "expo-app-loading";
import axios from "axios";

const SignUp = ({ navigation }) => {
  const [user, setUser] = useState({
    username: null,
    email: null,
    password: null,
  });
  const [error, setError] = useState(null);
  const onUserChange = (type, text) => {
    switch (type) {
      case "Username":
        setUser({ ...user, username: text });
        break;
      case "Email or Phone":
        setUser({ ...user, email: text });
        break;
      case "Password":
        setUser({ ...user, password: text });
        break;
      default:
        break;
    }
  };

  const handleSignUp = async () => {
    try {
      console.log("This is the user thats being sent", user);
      const response = await axios.post(
        "http://192.168.1.40:8000/signup",
        user
      );
      console.log("Got SignUp response", response.data);

      if (response.data.success) {
        setError(null);
        navigation.navigate("login");
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const [isFontLoaded] = useFonts({ Arapey_400Regular_Italic });

  if (!isFontLoaded) return <AppLoading />;
  return (
    <View style={{ flex: 1 }}>
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
          Sign Up
        </Text>
        <View style={{ borderWidth: 1, borderColor: "blue" }}></View>
      </View>
      <View
        style={{
          marginVertical: variables.DIMENSIONS.height / 3,
          padding: 10,
        }}>
        <Text style={{ color: "red" }}>{error}</Text>
        <View style={{ marginVertical: 10 }}>
          <InputField placeholder="Username" onFieldChange={onUserChange} />
        </View>
        <View style={{ marginVertical: 10 }}>
          <InputField
            placeholder="Email or Phone"
            onFieldChange={onUserChange}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <InputField
            placeholder="Password"
            onFieldChange={onUserChange}
            secureTextEntry={true}
          />
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
            onPress={() => handleSignUp()}>
            <Text
              style={{
                color: "white",
                fontFamily: "Arapey_400Regular_Italic",
                fontSize: 24,
                textAlign: "center",
              }}>
              Sign Up
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
