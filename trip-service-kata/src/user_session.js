"use strict";

const User = require('./user');

class UserSession {
  /**
   * @returns {User}
   */
  getLoggedUser() {
    throw new Error(
      "UserSession.getLoggedUser() should not be called in an unit test"
    );
  }
}

module.exports = new UserSession();
