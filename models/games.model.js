const mongoose = require("mongoose");
const db = global.db;

// name, year, developers
const GameSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    year: { type: Number, required: true },
    developers: { type: String, required: true },
    genre: { type: String },
    meta: { score: Number, likes: { type: Number, default: 0 } }
  },
  {
    timestamps: true // createdAt, updatedAt (automatically)
  }
);

const Game = db.model("Game", GameSchema);

module.exports = Game;