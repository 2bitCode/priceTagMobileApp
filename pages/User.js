import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
// import Login from "./Login";
// import SignUp from "../components/SignUp";
import { UserContext } from "../components/Context";

const User = ({ navigation }) => {
  const [user, setUser] = useState({ email: "", password: "" });

  return (
    <View style={{ flex: 1 }}>
      <UserContext.Provider value={{ user, setUser }}>
        {navigation.navigate("login")}
      </UserContext.Provider>
    </View>
  );
};

export default User;
