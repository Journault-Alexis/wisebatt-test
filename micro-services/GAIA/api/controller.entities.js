// const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { Participant, validate } = require("./schema.participant");



/**
 * getParticipants
 *
 * @param {Request} req : the request
 * @param {Response} res : the response
 * @returns {Object} response
 */
async function getParticipants(req, res) {
  console.log(req.headers.filter);

const filter = req.headers.filter;

if(filter === 'last_name') {
  const participants = await Participant.find()
     .sort({last_name : 1} )
     .limit(Number(req.headers.limit)) 
  res.send(participants);
}
if(filter === 'first_name') {
  const participants = await Participant.find()
  .sort({first_name : 1} )
  .limit(Number(req.headers.limit)) 
res.send(participants);
}

if(filter === 'email') {
const participants = await Participant.find()
.sort({last_name : 1} )
.limit(Number(req.headers.limit)) 
res.send(participants);
}

if(filter === 'id') {

const participants = await Participant.find()
.sort({id : 1} )
.limit(Number(req.headers.limit)) 
res.send(participants);
}

}

module.exports =  {
  getParticipants
};
