import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import ListItem from "../../components/ListItem";
import useUser from "../../hooks/useUser";

const UserScreen = ({ navigation }) => {
  const { users, loading } = useUser();

  const onPressHandler = ({ id }) => {
    navigation.navigate("Posts", { userId: id });
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={users}
          keyExtractor={(user) => String(user.id)}
          renderItem={({ item }) => (
            <ListItem title={item.name} onPress={() => onPressHandler(item)} />
          )}
        />
      )}
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
