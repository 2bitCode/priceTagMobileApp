import React from "react";
import { View, ScrollView, FlatList } from "react-native";
import { variables } from "../variables";
import BackgroundImageEffect from "../components/BackgroundImageEffect";
import Card from "../components/Card";

const renderItem = ({ item }) => {
  return <Card text={item.key} />;
};

const Favourites = () => {
  return (
    <View style={{ flex: 1 }}>
      <BackgroundImageEffect />
      <FlatList
        style={{ marginTop: 15 }}
        data={variables.FAVOURITES.products}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Favourites;
