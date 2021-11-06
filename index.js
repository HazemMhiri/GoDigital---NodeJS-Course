require("dotenv").config();

const greetingModule = require("./examples/greeting");
const {
  createJSON,
  createBigFile,
  readBigFile,
} = require("./examples/fileManager");

// const { helloJob } = require("./examples/cron");

// helloJob.start();

// require("./examples/events");

// const { sayHello, sayGoodbye } = greetingModule;

// sayHello("GoDigital");
// sayGoodbye();

// createJSON({ firstName: "John", lastName: "Doe" });

// createBigFile();

// readBigFile();

// require("./httpServer");

require("./express");
