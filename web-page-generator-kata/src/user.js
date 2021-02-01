class User {
  constructor(name, biography) {
    this.name = name;
    this.biography = biography;
  }

  getName() {
    return this.name;
  }

  getBiography() {
    return this.biography;
  }
}

module.exports = User;
