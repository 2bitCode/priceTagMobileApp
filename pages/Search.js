import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text } from "react-native";
import InputField from "../components/InputField";
import { variables } from "../variables";
import Navbar from "../components/Navbar";

const Search = ({ navigation }) => {
  const [searchText, setSerarchText] = useState(null);

  const onSearchTextChange = useCallback((text) => {
    setSerarchText(text);
  });
  return (
    <View style={styles.container}>
      <InputField
        isIcon={true}
        placeholder="Search here"
        onFieldChange={onSearchTextChange}
      />
      <View style={styles.navbar}>
        <Navbar navigation={navigation} page="search" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginLeft: 10,
    padding: 10,
  },
  navbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: variables.DIMENSIONS.height / 15,
    backgroundColor: "white",
  },
});

export default Search;
