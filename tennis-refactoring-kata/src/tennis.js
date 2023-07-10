'use strict';

function getScore(m_score1, m_score2) {
  if (isTie(m_score1, m_score2)) {
    return getTieScores(m_score1);
  } else if (isAdvantage(m_score1, m_score2)) {
    return getAdvantageScores(m_score1, m_score2);
  } else if (isWin(m_score1, m_score2)) {
    return getWinScores(m_score1, m_score2);
  } else {
    return getRegularScores(m_score1, m_score2);
  }
}

function isTie(m_score1, m_score2) {
  return m_score1 === m_score2;
}

function getTieScores(m_score1) {
  let tieScores = ['Love-All', 'Fifteen-All', 'Thirty-All'];

  return tieScores[m_score1] || 'Deuce';
}

function isAdvantage(m_score1, m_score2) {
  return (m_score1 >= 4 || m_score2 >= 4) &&
      (m_score1 - m_score2 === 1 || m_score1 - m_score2 === -1);
}

function getAdvantageScores(m_score1, m_score2) {
  const minusResult = m_score1 - m_score2;
  if (minusResult === 1) {
    return 'Advantage player1';
  } else if (minusResult === -1) {
    return 'Advantage player2';
  }
}

function isWin(m_score1, m_score2) {
  return m_score1 >= 4 || m_score2 >= 4;
}

function getWinScores(m_score1, m_score2) {
  const minusResult = m_score1 - m_score2;
  if (minusResult === 1) {
  } else if (minusResult >= 2) {
    return 'Win for player1';
  } else {
    return 'Win for player2';
  }
}

function getRegularScores(m_score1, m_score2) {
  let regularScores = ['Love', 'Fifteen', 'Thirty', 'Forty'];
  return regularScores[m_score1] + '-' + regularScores[m_score2];
}

module.exports = getScore;
