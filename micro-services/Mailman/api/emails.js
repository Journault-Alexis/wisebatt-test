
const express = require("express");
const router = express.Router();

const emailsController = require ('./controller.emails');

/**
 * @api {post} /send send an email
 * @apiGroup email
 *
 * @apiDescription sends an email
 *
 * (body parameters)
 * @apiParam {String}   language    The language of the template
 * @apiParam {String}   template_name    The name of the template
 * @apiParam {Object}   email    Where to send this and who to copy in, what's it about
 * @apiParam {Object}   substitutions    The things to replace in the template
 *
 * @apiParamExample {json} (body) Request-Example:
 * {
 *   template: {
 *     client: 'wisebatt',
 *     type: 'contact',
 *     language: 'fr-FR',
 *     name: 'newsletter1'
 *   },
 *   email: {
 *     to: 'alexis@alexis.fr',
 *     from: 'no-replyg@amexis.fr',
 *     subject: 'This is a test',
 *     cc: 'a@b.com,c@d.com',
 *     bcc: 'a@b.com,c@d.com'
 *   },
 *   substitutions: {
 *      "date": "01/08/2018",
 *      "list": ["value 1", "value 2"]
 *   }
 * }
 *
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 */
router.post('/', emailsController.sendEmail);


  module.exports = router ;
