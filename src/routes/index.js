const express = require('express');
const router = express.Router();
const RestaService = require('../services/resta');

router.get('/health', (req, res) => {
	res.json({ status: "api-resta is Up!!" });
});

router.get('/resta/:operacion', (req, res, next) => {
	console.log('Operacion a resolver: ', req.params)

	try {
		const restaService = new RestaService();

		res.status(200).json({
			resta: restaService.getResta(req.params.operacion)
		});

	} catch (e) {
		next(e);
	}
});

module.exports = router;
