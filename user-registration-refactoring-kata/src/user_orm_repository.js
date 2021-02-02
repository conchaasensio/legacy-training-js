
module.exports = {
  users: new Map(),
  save(user) {
    this.users.set(user.email, user);
  },
  
  findByEmail(email) {
    return this.users.get(email);
  },

  flush() {
    this.users.clear();
  },
};
