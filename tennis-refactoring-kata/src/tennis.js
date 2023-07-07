'use strict';

function getScore(m_score1, m_score2) {
  if (isTie(m_score1, m_score2)) {
    return getTieScores(m_score1);
  } else if (isAdvantageOrWin(m_score1, m_score2)) {
    return getAdvantageOrWinScores(m_score1, m_score2);
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

function isAdvantageOrWin(m_score1, m_score2) {
  return m_score1 >= 4 || m_score2 >= 4;
}

function getAdvantageOrWinScores(m_score1, m_score2) {
  const minusResult = m_score1 - m_score2;
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

function getRegularScores(m_score1, m_score2) {
  let regularScores = ['Love', 'Fifteen', 'Thirty', 'Forty'];
  return regularScores[m_score1] + '-' + regularScores[m_score2];
}

module.exports = getScore;
