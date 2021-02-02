const users = new Map();

module.exports = {

  save(user) {
    users.set(user.email, user);
  },

  findByEmail(email) {
    return users.get(email);
  },

  flush() {
    users.clear();
  },
};
