const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  first_name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  last_name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  gender: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 15
  },
  ip_address: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 20
  },
});

const Participant = mongoose.model("Participant", participantSchema);

function validateParticipant(participant) {
  const schema = {
     
    id: Joi.number()
      .required(),
    first_name: Joi.string()
      .min(2)
      .max(50)
      .required(),
    last_name: Joi.string()
      .min(2)
      .max(50)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
   gender: Joi.string()
      .min(2)
      .max(15)
      .required(),
   ip_address: Joi.string()
      .min(5)
      .max(20)
      .required(),
   
  };

  return Joi.validate(participant, schema);
}

exports.Participant = Participant;
exports.validate = validateParticipant;
