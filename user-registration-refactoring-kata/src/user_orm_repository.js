const User = require("./user");

class UserOrmRepository {
  save(user) {

  }

  findByEmail(email) {
    if (email === "existing@email.com") {
      return new User(1, "Pepito", "existing@email.com", "anyPassword");
    }
    return undefined;
  }
}

module.exports = UserOrmRepository;
