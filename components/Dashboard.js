import React, { useContext } from "react";
import { View, Text } from "react-native";
import Head from "./Head";
import { UserContext } from "./Context";

const Dashboard = () => {
  const { loggedinUser, setLoggedinUser } = useContext(UserContext);
  return (
    <View style={{ flex: 1, marginTop: 40, marginLeft: 10, padding: 10 }}>
      <Head text={loggedinUser.username} />
    </View>
  );
};

export default Dashboard;
