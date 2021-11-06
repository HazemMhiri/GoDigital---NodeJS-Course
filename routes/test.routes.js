const express = require("express");
const testController = require("../controllers/test.controller");

const router = express.Router();

router.get("/hello", testController.sayHello);
router.get("/goodbye", testController.sayGoodbye);
router.get("/games", testController.getGames);

module.exports = router;
