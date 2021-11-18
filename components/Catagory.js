import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import ClickButton from "../components/ClickButton";
import { PositionContext } from "../components/PositionContext";
import { variables } from "../variables";
import { useFonts, Arapey_400Regular } from "@expo-google-fonts/arapey";
import AppLoading from "expo-app-loading";

// const DATA = [
//   { key: "catagory1" },
//   { key: "catagory2" },
//   { key: "catagory3" },
//   { key: "catagory4" },
//   { key: "catagory5" },
//   { key: "catagory6" },
// ];

const Item = ({ item }) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <Text style={styles.item}>{item.key}</Text>
    </TouchableOpacity>
  );
};

const renderItem = ({ item }) => {
  return <Item item={item} />;
};

const Catagory = () => {
  const { position, setPosition } = useContext(PositionContext);

  const [isFontLoaded] = useFonts({
    Arapey_400Regular,
  });

  if (!isFontLoaded) return <AppLoading />;

  return (
    <View
      style={[
        styles.container,
        position === "bottom" ? styles.bottomContainer : styles.topContainer,
      ]}
    >
      <ClickButton />

      <FlatList
        data={variables.CATAGORY.data}
        renderItem={renderItem}
        style={styles.list}
        contentContainerStyle={{
          alignItems: "center",
          position: "relative",
          display: position === "bottom" ? "none" : "flex",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  bottomContainer: {
    position: "absolute",
    top: variables.IMAGE.bgImageHeight + 20,
    left: 0,
    height: "100%",
    flex: 1,
    alignItems: "center",
  },
  topContainer: {
    position: "relative",
  },
  list: {
    minWidth: variables.DIMENSIONS.width / 2,
    marginVertical: 8,
  },
  item: {
    backgroundColor: "white",
    marginHorizontal: 8,
    marginVertical: 8,
    fontSize: 24,
    fontFamily: "Arapey_400Regular",
    width: variables.DIMENSIONS.width / 1.5,
    height: variables.DIMENSIONS.height / 24,
    borderRadius: 10,
    alignItems: "center",
    textAlign: "center",
    overflow: "hidden",
  },
});

export default Catagory;
