
const httpStatus = require('http-status');
const Joi = require('joi');
const fs = require('fs');

const mjml2html = require('mjml');
const nodemailer = require('nodemailer');
const Mustache = require('mustache');

const config = require('config');
const requestSchema = require( './schema.emails');

const _ = require("lodash");




/**
 * readFileAsync promise readFile
 *
 * @param {String} path : the file path
 * @returns {Promise} a promise
 */
function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}


/**
 * sendEmail
 *
 * @param {Request} req : the request
 * @param {Response} res : the response
 * @returns {Object} response
 */
async function sendEmail(req, res) {
  console.log("see the body", req.body);
  // const requestData = Joi.attempt(req.body, requestSchema);
const requestData = req.body
  // Read the template from the input params
  const template = await readFileAsync(
    `./templates/${requestData.template.client}/${
      requestData.template.type
    }/${requestData.template.language}/${
      requestData.template.name
    }.mjml`.toLowerCase()
  );

  const htmlOutput = mjml2html(
    Mustache.render(template, requestData.substitutions),
    {}
  );


  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    auth: {
    user: "no-reply@Spiraler.com",
    pass: config.get('wisebatt_password'),
    },
    tls: true
  });

  const mailOptions = {
    from: requestData.email.from,
    to: requestData.email.to,
    subject: requestData.email.subject,
    html: htmlOutput.html,
    cc: requestData.email.cc,
    bcc: requestData.email.bcc,
  };

  const response = await transporter.sendMail(mailOptions);

  if (response.rejected.length > 0) {
   console.log('postman.send.failure');
  }

  if (response.rejected.length === 0) {
    console.log('postman.send.success');
  }



  console.log({ response }, '[server#api#email#send] Response from zoho');
  return res.status(httpStatus.OK).json(response);
}



module.exports =  {
  sendEmail
};
