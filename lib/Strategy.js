/* Passport Strategy for Fiidmi API */
"use strict";

var passport = require('passport'),
    util = require('util');

/** `Strategy` constructor. */
function Strategy(options, verify) {
	if (typeof options == 'function') {
		verify = options;
		options = {};
	}
	options = options || {};

	// If true, test environment is enabled, otherwise not.
	//options.test = options.test || false;

	passport.Strategy.call(this);
	this.name = 'fiidmi';
	this._verify = verify;
}

/**
 * Inherit from `passport.Strategy`.
 */
util.inherits(Strategy, passport.Strategy);

/**
 * Authenticate request based on the contents of a form submission.
 *
 * @param {Object} req
 * @api protected
 */
Strategy.prototype.authenticate = function(req, options) {
};

/**
 * Expose `Strategy`.
 */ 
module.exports = Strategy;

/* EOF */
