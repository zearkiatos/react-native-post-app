import React from "react";
import { Text, View, StyleSheet } from "react-native";
const ListItem = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingHorizontal: 15
  },
  text: {
    fontSize: 18
  }
});

export default ListItem;
