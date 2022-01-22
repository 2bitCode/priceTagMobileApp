import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Dashboard from "../components/Dashboard";
import { UserContext } from "../components/Context";

const User = ({ navigation }) => {
  const { loggedinUser, setLoggedinUser } = useContext(UserContext);

  useEffect(() => {
    console.log("User rendering....");
    if (!loggedinUser.username) {
      navigation.navigate("login");
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Dashboard />
    </View>
  );
};
export default User;
