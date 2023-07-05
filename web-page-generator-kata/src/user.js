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

  getScore() {
    const userBiography = this.biography.toLowerCase();
    const keywords = ['edición', 'sociedad', 'mundo', 'libro', 'texto', 'revista', 'valores', 'educación', 'teatro', 'social'];

    let score = 0;
    for (const keyword of keywords) {
        if (userBiography.includes(keyword)) {
          score +=1;
        }
    }
    return score;
  }

  getLocalization() {
    const userBiography = this.biography.split(' ');
    const localizations = ['Barcelona', 'Madrid', 'Granada', 'Vigo', 'Palma de Mallorca'];

    for (const userBiographyElement of userBiography) {
      for (const localization of localizations) {
        if (userBiographyElement.includes(localization)) {
          return localization;
        }
      }
    }
    return "";
  }

  getCommunityManagerLabel() {
    return this.biography.includes('community manager')
        ? 'Community Manager'
        : '';
  }

}

module.exports = User;
