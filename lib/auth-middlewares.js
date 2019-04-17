'use strict';

/**
 * Middlewares for authentication
 */

const Boom = require('boom');
const passport = require('passport');
const userlist = require('./userlist.js');

/**
 * middleware to authorize members of one or more groups
 * @param  {String|Array}  authorizedGroups  an authorized group or an array of groups
 */
exports.authorizeMembersOf = function (authorizedGroups) {
  if (typeof authorizedGroups == 'string') {
    authorizedGroups = [authorizedGroups];
  }
  return function (req, res, next) {
    if (!req.user || (authorizedGroups.indexOf(req.user.group) === -1)) {
      return next(Boom.unauthorized());
    }
    next();
  };
};

/**
 * middleware to ensure a user is authenticated
 * can try a basic auth if it's not the case
 */
exports.ensureAuthenticated = function (tryBasic) {
  return function (req, res, next) {
    if (req.isAuthenticated()) { return next(); }

    if (tryBasic) { passport.authenticate('basic')(req, res, next); }
    else { return next(Boom.unauthorized()); }
  };
};

/**
 * middleware used by passport for basic/local authentication
 */
exports.login = function (userid, password, done) {
  userlist.get(userid, function (err, user) {
    if (err) { return done(err); }

    const cryptedPassword = userlist.crypt(userid, password);

    if (!user || user.password !== cryptedPassword) {
      return done(null, false);
    }

    done(null, user);
  });
};