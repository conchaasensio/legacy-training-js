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
  let tieScores = ['Love-All', 'Fifteen-All', 'Thirty-All'];
  return tieScores[pointsPlayers] || 'Deuce';

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

function getRegularScores(pointsPlayer1, pointsPlayer2) {
  let regularScores = ['Love', 'Fifteen', 'Thirty', 'Forty'];
  return regularScores[pointsPlayer1] + '-' + regularScores[pointsPlayer2];
}

export default getScore;
