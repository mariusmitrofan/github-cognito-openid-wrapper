const responder = require('./util/responder');
const auth = require('./util/auth');
const controllers = require('../controllers');
const keepAlive = require('./util/keepAlive');

const handler = (event, context, callback) => {
  controllers(responder(callback)).openIdConfiguration(
    auth.getIssuer(event.headers.Host)
  );
};

module.exports.handler = keepAlive(handler);
