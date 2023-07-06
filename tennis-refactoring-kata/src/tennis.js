"use strict";

function getScore(m_score1, m_score2) {
    let tempScore = 0;
  if (isTie(m_score1, m_score2)) {
    return getTieScores(m_score1);
  } else if (isAdvantageOrWin(m_score1, m_score2)) {
    return getAdvantageOrWinScores(m_score1, m_score2);
  } else {
    return getRegularScores(tempScore, m_score1, m_score2);
  }
}

function isTie(m_score1, m_score2) {
  return m_score1 === m_score2;
}
function getTieScores(m_score1) {
  let score;
  switch (m_score1) {
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
  return score;
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

function getRegularScores(tempScore, m_score1, m_score2) {
  let score = "";
  for (let i = 1; i < 3; i++) {
    if (i === 1) {
      tempScore = m_score1;
    } else {
      score += '-';
      tempScore = m_score2;
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

module.exports = getScore;
