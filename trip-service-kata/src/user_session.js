'use strict';

import User from './user';

class UserSession {
  /**
   * @returns {User}
   */
  getLoggedUser() {
    throw new Error(
      'UserSession.getLoggedUser() should not be called in an unit test'
    );
  }
}

export default new UserSession();
