import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import Dashboard from "../components/Dashboard";
import { UserContext } from "../components/Context";

const User = ({ navigation }) => {
  const { loggedinUser, setLoggedinUser } = useContext(UserContext);

  return (
    <View style={{ flex: 1 }}>
      {!loggedinUser ? navigation.navigate("login") : <Dashboard />}
    </View>
  );
};
export default User;
