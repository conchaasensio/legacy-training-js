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

  getLocalization() {
    const userBiography = this.biography.split(' ');
    const localizations = ['Barcelona', 'Madrid', 'Granada', 'Vigo', 'Palma de Mallorca'];

    this.localization = '';

    for (const userBiographyElement of userBiography) {
      for (const localization of localizations) {
        if (userBiographyElement.includes(localization)) {
          this.localization = localization;
        }
      }
    }
    return this.localization;
  }

  getCommunityManagerLabel() {
    if (this.biography.includes('community manager')) {
      return 'Community Manager'
    }
    else {
      return '';
    }
  }

}

module.exports = User;
