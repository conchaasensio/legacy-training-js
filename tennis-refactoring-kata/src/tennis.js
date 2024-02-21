'use strict';

function getScore(pointsPlayer1, pointsPlayer2) {
  if (isTie(pointsPlayer1, pointsPlayer2)) {
    return getTieScores(pointsPlayer1);
  } else if (isAdvantageOrWin(pointsPlayer1, pointsPlayer2)) {
    return getAdvantageOrWinScores(pointsPlayer1, pointsPlayer2);
  } else {
    return getRegularScores(pointsPlayer1, pointsPlayer2);
  }
}

function isTie(pointsPlayer1, pointsPlayer2) {
  return pointsPlayer1 === pointsPlayer2;
}

function getTieScores(pointsPlayers) {
  switch (pointsPlayers) {
    case 0:
      return 'Love-All';
    case 1:
      return 'Fifteen-All';
    case 2:
      return 'Thirty-All';
    default:
      return 'Deuce';
  }
}

function isAdvantageOrWin(pointsPlayer1, pointsPlayer2) {
  return pointsPlayer1 >= 4 || pointsPlayer2 >= 4;
}

function getAdvantageOrWinScores(pointsPlayer1, pointsPlayer2) {
  let minusResult = pointsPlayer1 - pointsPlayer2;
  if (minusResult === 1) {
    return 'Advantage player1';
  } else if (minusResult === -1) {
    return 'Advantage player2';
  } else if (minusResult >= 2) {
    return 'Win for player1';
  } else {
    return 'Win for player2';
  }
}

function getRegularScores(
    pointsPlayer1, pointsPlayer2, tempScore = '', score = '') {
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
  return score;
}

export default getScore;
