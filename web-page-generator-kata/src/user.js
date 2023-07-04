class User {
  constructor(name, biography, score) {
    this.name = name;
    this.biography = biography;
    this.score = score;
  }

  getName() {
    return this.name;
  }

  getBiography() {
    return this.biography;
  }

  getScore() {
    const userBiography = this.biography.split(' ');
    const keywords = ['edición', 'sociedad', 'mundo', 'libro', 'revista', 'valores', 'educación', 'teatro', 'social'];

    this.score = 0;

    for (const userBiographyElement of userBiography) {
      for (const keyword of keywords) {
        if (userBiographyElement === keyword) {
          this.score +=1;
        }
      }
    }
    return this.score;
  }
}

module.exports = User;
