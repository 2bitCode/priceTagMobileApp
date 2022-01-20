import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Login from "../components/Login";
import { UserContext } from "../components/Context";

const User = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  return (
    <View style={styles.container}>
      <UserContext.Provider value={{ user, setUser }}>
        <Login />
      </UserContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default User;
