const User = require("./user");

class UserOrmRepository {

  constructor() {
      this.users = new Map();
  }

  save(user) {
    this.users.set(user.email, user);
    console.log(this.users.get(user.email));
  }

  findByEmail(email) {
    if (email === "existing@email.com") {
      return new User(1, "Pepito", "existing@email.com", "anyPassword");
    }
    return this.users.get(email);
  }
}

module.exports = UserOrmRepository;
