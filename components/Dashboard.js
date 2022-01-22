import React, { useContext } from "react";
import { View, Text } from "react-native";
import { UserContext } from "./Context";

const Dashboard = () => {
  const { loggedinUser, setLoggedinUser } = useContext(UserContext);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to the app {`${loggedinUser.username}`}</Text>
    </View>
  );
};

export default Dashboard;
