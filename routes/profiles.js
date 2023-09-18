const express = require('express');
const profiles_router = express.Router();
const profiles_controller = require('../controllers/profiles');
const path = require("path");

profiles_router.get("/", profiles_controller.load);

module.exports = profiles_router;