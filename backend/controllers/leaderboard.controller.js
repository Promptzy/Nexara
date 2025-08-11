const { getRegularContributors } = require("../services/leaderboard.service");

async function getDevsLeaderboard(req, res) {
  try {
    const data = await getRegularContributors();
    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}

module.exports = { getDevsLeaderboard };
