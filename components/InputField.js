import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useFonts, Arapey_400Regular } from "@expo-google-fonts/arapey";
import AppLoading from "expo-app-loading";

const InputField = () => {
  const [searchText, setSearchText] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const [isFontLoaded] = useFonts({ Arapey_400Regular });

  if (!isFontLoaded) return <AppLoading />;

  return (
    <View
      style={{
        ...styles.container,
        borderColor: isActive ? "blue" : "#efefef",
      }}
    >
      <Feather
        name="search"
        size={24}
        color={isActive ? "blue" : "black"}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        value={searchText}
        onChangeText={() => setSearchText(searchText)}
        onFocus={() => {
          setIsActive(true);
        }}
        placeholder="Search here"
        autoCorrect={false}
        selectionColor={"blue"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    // borderColor: "#efefef",
  },
  input: {
    padding: 6,
    flex: 1,
    fontSize: 20,
    fontFamily: "Arapey_400Regular",
  },
  searchIcon: {
    padding: 5,
  },
});

export default InputField;
