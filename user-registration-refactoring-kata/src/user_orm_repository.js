class UserOrmRepository {
  findByEmail(email) {
    if (email === "existing@email.com") {
      return { name: "Pepito", email: "existing@email.com" };
    }
    return undefined;
  }
}

module.exports = UserOrmRepository;
