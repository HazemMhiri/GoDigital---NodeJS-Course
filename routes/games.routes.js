const express = require("express");
const gamesController = require("../controllers/games.controller");

const router = express.Router();

router.get("/", gamesController.getGames);
router.get("/:id", gamesController.getGameById);
router.post("/", gamesController.createGames);
router.put("/:id", gamesController.updateGameById);
router.delete("/:id", gamesController.deleteGameById);

module.exports = router;
