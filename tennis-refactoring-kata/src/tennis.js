'use strict';

function getScore(pointsPlayer1, pointsPlayer2) {
  if (isTie(pointsPlayer1, pointsPlayer2)) {
    return getTieScores(pointsPlayer1);
  } else if (isAdvantage(pointsPlayer1, pointsPlayer2)) {
    return getAdvantageScores(pointsPlayer1, pointsPlayer2);
  } else if (isWin(pointsPlayer1, pointsPlayer2)) {
    return getWinScores(pointsPlayer1, pointsPlayer2);
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

function isAdvantage(pointsPlayer1, pointsPlayer2) {
  return (pointsPlayer1 >= 4 || pointsPlayer2 >= 4) &&
      (pointsPlayer1 - pointsPlayer2 === 1 || pointsPlayer1 - pointsPlayer2 ===
          -1);
}

function getAdvantageScores(pointsPlayer1, pointsPlayer2) {
  return 'Advantage ' + winningPlayer(pointsPlayer1, pointsPlayer2);
}

function winningPlayer(pointsPlayer1, pointsPlayer2) {
  return pointsPlayer1 > pointsPlayer2 ? 'player1' : 'player2';

}

function isWin(pointsPlayer1, pointsPlayer2) {
  return pointsPlayer1 >= 4 || pointsPlayer2 >= 4;
}

function getWinScores(pointsPlayer1, pointsPlayer2) {
  return 'Win for ' + winningPlayer(pointsPlayer1, pointsPlayer2);
}

function getRegularScores(pointsPlayer1, pointsPlayer2) {
  let regularScores = ['Love', 'Fifteen', 'Thirty', 'Forty'];
  return regularScores[pointsPlayer1] + '-' + regularScores[pointsPlayer2];
}

export default getScore;
