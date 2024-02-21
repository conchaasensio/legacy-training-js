'use strict';

function getScore(pointsPlayer1, pointsPlayer2) {
  let score = '';
  let tempScore = 0;
  if (pointsPlayer1 === pointsPlayer2) {
    switch (pointsPlayer1) {
      case 0:
        score = 'Love-All';
        break;
      case 1:
        score = 'Fifteen-All';
        break;
      case 2:
        score = 'Thirty-All';
        break;
      default:
        score = 'Deuce';
        break;
    }
  } else if (pointsPlayer1 >= 4 || pointsPlayer2 >= 4) {
    let minusResult = pointsPlayer1 - pointsPlayer2;
    if (minusResult === 1) {
      score = 'Advantage player1';
    } else if (minusResult === -1) {
      score = 'Advantage player2';
    } else if (minusResult >= 2) {
      score = 'Win for player1';
    } else {
      score = 'Win for player2';
    }
  } else {
    for (let i = 1; i < 3; i++) {
      if (i === 1) {
        tempScore = pointsPlayer1;
      } else {
        score += '-';
        tempScore = pointsPlayer2;
      }
      switch (tempScore) {
        case 0:
          score += 'Love';
          break;
        case 1:
          score += 'Fifteen';
          break;
        case 2:
          score += 'Thirty';
          break;
        case 3:
          score += 'Forty';
          break;
      }
    }
  }

  return score;
}

export default getScore;
