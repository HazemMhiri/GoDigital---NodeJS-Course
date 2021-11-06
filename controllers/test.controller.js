const data = require("../placeholderData.json");

module.exports.sayHello = (req, res) => {
  res.status(200).json({ message: "Hi GoDigital Students!" });
};

module.exports.sayGoodbye = (req, res) => {
  res.status(200).json({ message: "Goodbye GoDigital Students!" });
};

module.exports.getGames = (req, res) => {
  res.status(200).json({ data: data.games });
};
