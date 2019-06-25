## Introduction

This project is a micro-service for managing Users with JWT.

## Setup

Make sure to follow all these steps exactly as explained below. Do not miss any steps or you won't be able to run this application.

### Install MongoDB

To run this project, you need to install the latest version of MongoDB Community Edition first.

https://docs.mongodb.com/manual/installation/

Once you install MongoDB, make sure it's running.

### Install the Dependencies

Next, from the project folder, install the dependencies:

    npm i


### Run the Tests

You're almost done! Run the tests to make sure everything is working:

    npm test


### Start the Server

    node index.js

This will launch the Node server on port 3900. 



### (Optional) Environment Variables

If you look at config/default.json, you'll see a property called jwtPrivateKey. This key is used to encrypt JSON web tokens. So, for security reasons, it should not be checked into the source control. I've set a default value here to make it easier for you to get up and running with this project. For a production scenario, you should store this key as an environment variable.

On Mac:

    export wisebatt_jwtPrivateKey=yourSecureKey

On Windows:

    set wisebatt_jwtPrivateKey=yourSecureKey
