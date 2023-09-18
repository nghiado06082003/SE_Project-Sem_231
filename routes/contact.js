const express = require('express');
const contact_router = express.Router();
const contact_controller = require('../controllers/contact');
const path = require("path");

contact_router.get("/", contact_controller.load);

module.exports = contact_router;