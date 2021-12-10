class UserRepository {
  async find() {
    throw new Error("Abstract Method has no implementation");
  }

  async postsByUser(userId) {
    throw new Error("Abstract Method has no implementation");
  }
}

export default UserRepository;
