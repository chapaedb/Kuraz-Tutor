const sessionRoute = require('./session');
const Authroute = require('./auth');
const adminRoute = require('./admin');
const messageRoute = require('./message');
const paymentRoute = require('./payment');

const profileRoute = require('./profile');
const coursesRoute = require('./courses');
module.exports = {sessionRoute, Authroute, profileRoute, coursesRoute,adminRoute,messageRoute, paymentRoute};

