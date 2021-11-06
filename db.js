const mongoose = require("mongoose");

const { MONGODB_URL, MONGODB_DBNAME, MONGODB_USER, MONGODB_PWD } = process.env;
const DB_URL = `mongodb+srv://${MONGODB_USER}:${MONGODB_PWD}@${MONGODB_URL}/${MONGODB_DBNAME}?retryWrites=true&w=majority`;

const mongoOptions = {
  connectTimeoutMS: 10000,
};

function connectToMongoDB() {
  const db = mongoose.createConnection(DB_URL, mongoOptions);

  db.on("open", () => {
    console.log(
      `connected to database "${MONGODB_DBNAME}" as "${MONGODB_USER}".`
    );
  });

  db.on("error", (err) => console.error(err));

  return db;
}

module.exports = connectToMongoDB;
