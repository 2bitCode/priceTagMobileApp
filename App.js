import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Home from "./pages/Home";
import { Asset } from "expo-asset";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "./pages/Search";
import Menu from "./pages/Menu";
import Favourites from "./pages/Favourites";
import User from "./pages/User";

const cacheImages = (images) => {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

const Stack = createNativeStackNavigator();

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const _loadAssetsAsync = async () => {
    const imageAssets = cacheImages([require("./assets/Images/bg.jpg")]);
    await Promise.all([...imageAssets]);
  };

  if (isReady) {
    return (
      <AppLoading
        startAsync={_loadAssetsAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="menu" component={Menu} />
          <Stack.Screen name="heart" component={Favourites} />
          <Stack.Screen name="user" component={User} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
  },
});

export default App;
