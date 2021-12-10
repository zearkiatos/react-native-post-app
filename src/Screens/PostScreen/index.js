import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ListItem from "../../components/ListItem";
import usePost from "../../hooks/usePost";

const PostScreen = ({ navigation }) => {
  const userId = navigation.getParam("userId");
  const { posts, loading } = usePost(userId);
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={posts}
          keyExtractor={(post) => String(post.id)}
          renderItem={({ item }) => (
            <ListItem title={item.title} />
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

export default PostScreen;
