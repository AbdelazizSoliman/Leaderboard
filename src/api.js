// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

export const createGame = async (name) => {
  try {
    const response = await axios.post(apiUrl, {
      name,
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to create game');
  }
};

export const getScores = async (gameId) => {
  try {
    const response = await fetch(`${apiUrl}${gameId}/scores`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { result } = await response.json();
    return result;
  } catch (error) {
    throw new Error('Failed to get scores');
  }
};

export const addScore = async (gameId, user, score) => {
  try {
    await fetch(`${apiUrl}${gameId}/scores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, score }),
    });
  } catch (error) {
    throw new Error('Failed to add score');
  }
};
