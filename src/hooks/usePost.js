import { useEffect, useState } from "react";
import UserEvent from "../Users/Application/UserEvent";
import JsonPlaceholderApiUserRepository from "../Users/Infrastructure/JsonPlaceholderApiUserRepository";
const usePost = (userId) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const userEvent = new UserEvent(new JsonPlaceholderApiUserRepository());
    const postsFetched = await userEvent.getPosts(userId);
    setPosts(postsFetched);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    loading
  };
};

export default usePost;
