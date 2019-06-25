



const express = require("express");
const router = express.Router();

const authController = require ('./controller.auth');



// /**
//  * @api {post} /
//  * @apiGroup crud
//  *
//  * @apiDescription   check is the user isAuthenticated
//  *
//  * @apiParam {String}   entity_id     the ID of the entity
//  *
//  * @apiParamExample {json} (query) Request-Example:
//  * {
//  *   email: 'alexis@aalexis.fr'
//  * }
//  *
//  *
//  * @apiSuccessExample Success-Response:
//  *  HTTP/1.1 200 OK
//  * {
//  *   "tokenxxxxx"
//  * }
//  */
router.post('/', 
 authController.isAuthenticated
);

  module.exports = router ;
