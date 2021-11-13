const PORT = process.env.PORT || 8080;
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { Server } = require("socket.io");
const myDB = require("./db");
global.db = myDB;

const myData = require("./placeholderData.json");

const app = express();

const routes = require("./routes");

// plugin json middleware
// parse stringified JSON and inject it into req.body as an object
app.use(express.json());
// read parameters that are urlencoded (?firstName="Hazem"&lastName="Mhiri")
// and inject it into  req.params as an object
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

app.use("/", routes);

const server = app.listen(PORT, () => {
  console.log("server is online on port: " + PORT);
});

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Someone connected to my web sockets! - socket id:", socket.id);

  socket.emit("data", { data: myData });

  socket.on("message", (payload) => {
    console.log("Message received: ", payload.data);

    let answer;

    switch (payload.data.toLowerCase()) {
      case "hello":
        answer = "Hi right back at you!";
        break;
      case "how are you?":
        answer = "I am fine. I am just a server though.";
        break;
      default:
        break;
    }

    if (answer) socket.emit("message", { data: answer });
  });
});

// server.close();
