class UserOrmRepository {
  static users = new Map();

  save(user) {
    UserOrmRepository.users.set(user.email, user);
  }

  findByEmail(email) {
    return UserOrmRepository.users.get(email);
  }

  static flush() {
    UserOrmRepository.users = new Map();
  }
}

module.exports = UserOrmRepository;
