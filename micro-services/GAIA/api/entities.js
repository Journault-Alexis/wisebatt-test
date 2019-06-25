



const express = require("express");
const router = express.Router();

const entitiesController = require ('./controller.entities');


router.get(
  '/', entitiesController.getParticipants
);


  module.exports = router ;
