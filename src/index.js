import "./styles.css";
import { createGame } from "./api.js";
import { refreshScores, submitScore } from "./scores.js";

const gameId = "ABC123";

const createAndLoadGame = async (name) => {
  try {
    await createGame(name);
    await refreshScores(gameId);
  } catch (error) {
    throw new Error("Failed to create and load game");
  }
};

const clearInputs = () => {
  document.getElementById("name").value = "";
  document.getElementById("score").value = "";
};

document.getElementById("refresh-button").addEventListener("click", () => {
  refreshScores(gameId);
});

document
  .getElementById("add-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const user = document.getElementById("name").value;
    const score = document.getElementById("score").value;
    await submitScore(gameId, user, score);
    clearInputs();
  });

// Call the createAndLoadGame function to initiate the game creation and score loading
createAndLoadGame("Abdelaziz");
