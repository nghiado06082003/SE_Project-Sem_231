const express = require('express');
const signup_router = express.Router();
const signup_controller = require('../controllers/signup');
const path = require("path");

signup_router.get("/", signup_controller.load);
signup_router.post("/", signup_controller.signup);

module.exports = signup_router;