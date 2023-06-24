import './styles.css';
import { refreshScores, submitScore } from './scores.js';

const gameId = 'ABCD1234';

const clearInputs = () => {
  document.getElementById('name').value = '';
  document.getElementById('score').value = '';
};

document.getElementById('refresh-button').addEventListener('click', () => {
  refreshScores(gameId);
});

document
  .getElementById('add-form')
  .addEventListener('submit', async (event) => {
    event.preventDefault();
    const user = document.getElementById('name').value;
    const score = document.getElementById('score').value;
    await submitScore(gameId, user, score);
    await refreshScores(gameId);
    clearInputs();
  });

document.getElementById('clear-all').addEventListener('click', () => {
  const scoresList = document.getElementById('scores-list');
  scoresList.innerHTML = '';
  localStorage.removeItem('score');
});
