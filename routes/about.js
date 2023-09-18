const express = require('express');
const about_router = express.Router();
const about_controller = require('../controllers/about');
const path = require("path");

about_router.get("/system", about_controller.loadClub);
about_router.get("/team", about_controller.loadTeam);

module.exports = about_router;