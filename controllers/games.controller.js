const Game = require("../models/games.model");

module.exports.getGames = async (req, res) => {
  try {
    const { limit, ...urlParams } = req.query;

    let gamesQuery = Game.find(urlParams);
    if (limit) gamesQuery = gamesQuery.limit(parseInt(limit));

    const gamesDocuments = await gamesQuery.exec();

    res.status(200).json({ status: "success", games: gamesDocuments });
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ status: "failure", error: error.massage });
  }
};

module.exports.getGameById = async (req, res) => {
  try {
    const { id } = req.params;

    const gameDocument = await Game.findById(id).exec();

    res.status(200).json({ status: "success", game: gameDocument });
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ status: "failure", error: error.massage });
  }
};

module.exports.createGames = async (req, res) => {
  try {
    let gameData = req.body;
    if (!Array.isArray(gameData)) {
      gameData = [gameData];
    }

    const results = await Game.insertMany(gameData);

    res.status(201).json({ status: "success", games: results });
  } catch (error) {
    console.error(error);
    res
      .status(error.status || 500)
      .json({ status: "failure", error: error.massage });
  }
};

module.exports.updateGameById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedGameData = req.body;

    const game = await Game.findByIdAndUpdate(id, updatedGameData, {
      new: true
    });

    res.status(201).json({ status: "success", game });
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ status: "failure", error: error.massage });
  }
};

module.exports.deleteGameById = async (req, res) => {
    try {
      const { id } = req.params;
  
      await Game.findByIdAndDelete(id);
  
      res.status(201).json({ status: "success" });
    } catch (error) {
      res
        .status(error.status || 500)
        .json({ status: "failure", error: error.massage });
    }
  };
