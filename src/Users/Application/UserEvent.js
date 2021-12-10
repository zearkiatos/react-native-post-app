class UserEvent {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async getUsers() {
        const users = await this.userRepository.find();
        return users;
    }

    async getPosts(userId) {
        const posts = await this.userRepository.postsByUser(userId);
        return posts;
    }
}

export default UserEvent;