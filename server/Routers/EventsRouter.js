const express = require("express");
const Controller = require("../Controllers/EventsController");

const router = express.Router();

router.post('/',Controller.ajouter_evenement);
module.exports=router;