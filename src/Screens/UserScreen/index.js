import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ListItem from "../../components/ListItem";

const users = [
  {
    id: 1,
    name: "Leanne"
  },
  {
    id: 2,
    name: "Ervin"
  }
];

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={users}
        keyExtractor={(user) => user.id}
        renderItem={({ item }) => <ListItem title={item.name} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  list: {
    alignSelf: "stretch"
  }
});

export default UserScreen;
