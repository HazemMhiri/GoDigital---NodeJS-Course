const express = require('express');
const testRoutes = require('./test.routes');
const gamesRoutes = require('./games.routes');

const router = express.Router();

router.use('/test', testRoutes);
router.use('/games', gamesRoutes);

module.exports = router;