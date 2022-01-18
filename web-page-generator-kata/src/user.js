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

  getScoreLabel() {
    const userBiography = this.biography.split(' ');
    const keywords = ["edición", "sociedad", "mundo", "libro", "texto", "revista", "valores", "educación", "teatro", "social"];
    this.score = 0;

    for (let i=0; i<userBiography.length; i++){
      for(let j=0; j<keywords.length; j++){
        if (userBiography [i] === keywords [j] ){
          this.score +=1;
        }
      }
    }
    return this.score;

  }

  getLocalizationLabel() {
    const officesLocalization = ["Barcelona", "Madrid", "Granada", "Vigo", "Palma de Mallorca"];

    for (let city of officesLocalization) {
      if (this.biography.includes(city)){
        return city;
      }
    }
  }

  getCommunityManagerLabel() {
      if (this.biography.includes("community manager")) {
        return "Community Manager"
      }
      else {
        return '';
      }
    }
}

module.exports = User;
