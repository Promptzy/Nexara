const express = require("express");
const { getDevsLeaderboard } = require("../controllers/leaderboard.controller");

const router = express.Router();

router.get("/devs", getDevsLeaderboard);

module.exports = router;

