const PORT = 8080;
const express = require("express");

const app = express();

// plugin json middleware
// parse stringified JSON and inject it into req.body as an object
app.use(express.json());
// read parameters that are urlencoded (?firstName="Hazem"&lastName="Mhiri")
// and inject it into  req.params as an object
app.use(express.urlencoded({ extended: true }));

app.use(
  (req, res, next) => {
    req.msg = "hello godigital";
    next();
  },
  (req, res) => {
    res.send(req.msg);
  }
);

const server = app.listen(PORT, () => {
  console.log("server is online on port: " + PORT);
});

// server.close();
