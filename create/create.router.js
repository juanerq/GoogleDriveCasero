const express = require("express");
const router = express.Router();
const createHttpHandler = require("./create.http");

router.route('/:path/:name?')
    .put(createHttpHandler.createDir);

exports.router = router;