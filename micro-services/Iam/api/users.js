
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const userController = require ('./controller.users');


// /**
//  * @api {get} /me get profil
//  * @apiGroup crud
//  *
//  * @apiDescription  get profil
//  *
//  * 
//  *
//  * @apiParamExample {json} (header) Request-Example:
//  * {
//  *   x-token: '012345670123456701234567'
//  * }
//  *
//  *
//  * @apiSuccessExample Success-Response:
//  *  HTTP/1.1 200 OK
//  * {
//  *   email:"a@a.fr"
//  *   name:"alexis"
//  * }
//  */
router.get(
  '/me', auth, userController.getProfil
);


// /**
//  * @api {post} /createEntity create an user
//  * @apiGroup crud
//  *
//  * @apiDescription  create an user
//  *
//  * 
//  *
//  * @apiParamExample {json} (query) Request-Example:
//  * {
//  *   name: 'alexis'
//  *   password: 'alexis22'
//  *   email: 'alexis@alexis.fr'
//  * }
//  *
//  *
//  * @apiSuccessExample Success-Response:
//  *  HTTP/1.1 200 OK
//  * {
//  *   "x-token"
//  * }
//  */
router.post('/', 
 userController.createUser
);

  module.exports = router ;
