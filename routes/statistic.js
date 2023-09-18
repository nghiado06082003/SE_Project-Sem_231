const express = require('express');
const statistic_router = express.Router();
const statistic_controller = require('../controllers/statistic');
const path = require("path");

statistic_router.get("/", statistic_controller.load);

module.exports = statistic_router;