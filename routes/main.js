const express = require("express");

const router = express.Router();

const indexController = require("../controller/main");

router.get("/",indexController.getIndex)

router.get("/about.html", indexController.getAbout)

router.get("/index.html", indexController.getHome)

router.post("/index.html", indexController.postComment)



module.exports = router
