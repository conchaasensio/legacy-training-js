"use strict";

const Trip = require('./trip');

/**
 * @returns {Trip[]}
 */
function findTripsByUser(user) {
  throw new Error("TripDAO should not be invoked on an unit test.");
}

module.exports = { findTripsByUser };
