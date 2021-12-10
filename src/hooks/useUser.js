import { useEffect, useState } from "react";
import UserEvent from "../Users/Application/UserEvent";
import JsonPlaceholderApiUserRepository from "../Users/Infrastructure/JsonPlaceholderApiUserRepository";
const useUser = () => {
  const [users, setUsers] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const fetchUsers = async () => {
    const userEvent = new UserEvent(new JsonPlaceholderApiUserRepository());
    const usersFetched = await userEvent.getUsers();
    setUsers(usersFetched);
    setLoading(false);
  };
  
  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    loading
  };
};

export default useUser;
