const express = require('express');
const signout_router = express.Router();
const signout_controller = require('../controllers/signout');

signout_router.get("/", signout_controller.signout);

module.exports = signout_router;

