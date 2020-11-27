const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
	res.json({ status: "api-resta is Up!!" });
});

module.exports = router;
