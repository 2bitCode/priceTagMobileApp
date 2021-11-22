import React from "react";
import { View, StyleSheet, TouchableHighlight, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { variables } from "../variables";

const Navbar = ({ navigation }) => {
  const icons = ["home", "search", "menu", "heart", "user"];

  const [active, setActive] = React.useState("home");
  const activeIcon = [styles.icon, { ...styles.activeIcon }];
  return (
    <View style={styles.container}>
      {icons.map((item, index) => {
        return (
          <TouchableHighlight
            key={index}
            onPress={() => {
              setActive(item);
              navigation.navigate("Search");
            }}
            activeOpacity={0.3}
            underlayColor="#fff"
          >
            <Feather
              name={item}
              size={30}
              color="black"
              style={active === item ? activeIcon : styles.icon}
            />
          </TouchableHighlight>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: (variables.DIMENSIONS.width - 5 * 30) / 10,
  },
  activeIcon: {
    color: "blue",
  },
});

export default Navbar;
