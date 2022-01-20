import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Login from "../components/Login";

const User = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default User;
