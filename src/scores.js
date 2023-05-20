import { getScores, addScore } from './api.js';

export const displayScores = (scores) => {
  const scoresList = document.getElementById('scores-list');
  scoresList.innerHTML = '';

  scores.forEach((score, index) => {
    const item = document.createElement('li');
    item.innerHTML = `${index + 1}. ${score.user}: ${score.score}`;
    scoresList.appendChild(item);
  });
};

export const refreshScores = async (gameId) => {
  try {
    const scores = await getScores(gameId);
    displayScores(scores);
  } catch (error) {
    throw new Error('Failed to refresh scores');
  }
};

export const submitScore = async (gameId, user, score) => {
  try {
    await addScore(gameId, user, score);
  } catch (error) {
    throw new Error('Failed to submit score');
  }
};
