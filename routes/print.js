const express = require('express');
const print_router = express.Router();
const print_controller = require('../controllers/print');
const path = require("path");

print_router.get("/", print_controller.load);

module.exports = print_router;